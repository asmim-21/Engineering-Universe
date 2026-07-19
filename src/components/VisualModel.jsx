import { useId, useLayoutEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

// Each step card cycles through this pastel palette (accent = badge/icon/underline,
// bg = card fill, border = card outline), matching the reference infographic.
export const PALETTE = [
  { accent: '#C99700', bg: '#FCF6E3', border: '#EAD9A0' },
  { accent: '#2B6CB0', bg: '#EAF2FB', border: '#BCD6F0' },
  { accent: '#7C4DBB', bg: '#F2ECFA', border: '#D8C7EE' },
  { accent: '#3E9C6D', bg: '#E9F6EF', border: '#BFE3CE' },
  { accent: '#D9722E', bg: '#FCEEE1', border: '#F2D0AE' },
  { accent: '#D25578', bg: '#FBE9EF', border: '#F2C2D2' }
]

// Steps may be plain strings or { icon, label, desc }; normalise to objects.
const normalise = (step) => (typeof step === 'string' ? { label: step } : step)

// How many columns the snake uses for a given step count. The aim is to keep it
// to two rows so an extra item extends the row sideways rather than dropping to
// a lonely third row (7 → 4+3, 8 → 4+4); 9 stays a balanced 3×3. Narrow screens
// shrink this further at measure time.
const desiredCols = (n) => {
  if (n <= 3) return n
  if (n === 4) return 2
  if (n <= 6) return 3
  if (n <= 8) return 4
  return 3
}

const gridCell = (i, cols) => {
  const r = Math.floor(i / cols)
  const k = i % cols
  return { r, col: r % 2 === 0 ? k : cols - 1 - k }
}

// Orthogonal path through waypoints with rounded corners — used for the
// wrap-around and loop-back connectors so they turn smoothly like the reference.
function orthPath(points, radius = 12) {
  if (points.length < 2) return ''
  let d = `M ${points[0][0]} ${points[0][1]}`
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1]
    const [cx, cy] = points[i]
    const [nx, ny] = points[i + 1]
    const d1 = Math.hypot(cx - px, cy - py) || 1
    const d2 = Math.hypot(nx - cx, ny - cy) || 1
    const r = Math.min(radius, d1 / 2, d2 / 2)
    const a = [cx + ((px - cx) / d1) * r, cy + ((py - cy) / d1) * r]
    const b = [cx + ((nx - cx) / d2) * r, cy + ((ny - cy) / d2) * r]
    d += ` L ${a[0]} ${a[1]} Q ${cx} ${cy} ${b[0]} ${b[1]}`
  }
  const last = points[points.length - 1]
  return `${d} L ${last[0]} ${last[1]}`
}

// Build the connector paths from measured card rectangles.
function buildArrows(cards, w, h, cols, n, loop) {
  const mid = (c) => c.y + c.h / 2
  const paths = []

  for (let i = 0; i < n - 1; i++) {
    const a = cards[i]
    const b = cards[i + 1]
    const ra = Math.floor(i / cols)
    const rb = Math.floor((i + 1) / cols)

    if (ra === rb) {
      // Same row: a straight horizontal hop between the facing edges.
      const y = mid(a)
      paths.push(
        a.x < b.x
          ? orthPath([[a.x + a.w, y], [b.x, y]])
          : orthPath([[a.x, y], [b.x + b.w, y]])
      )
    } else if (ra % 2 === 0) {
      // Wrap down the right margin into the next (right-to-left) row.
      const mx = w - 6
      paths.push(orthPath([[a.x + a.w, mid(a)], [mx, mid(a)], [mx, mid(b)], [b.x + b.w, mid(b)]]))
    } else {
      // Wrap down the left margin into the next (left-to-right) row.
      const mx = 6
      paths.push(orthPath([[a.x, mid(a)], [mx, mid(a)], [mx, mid(b)], [b.x, mid(b)]]))
    }
  }

  if (loop && n > 1) {
    const a = cards[n - 1]
    const b = cards[0]
    // Exit the left side of the last card and run up the left margin into the
    // first card, rather than dropping out of the bottom.
    paths.push(orthPath([[a.x, mid(a)], [6, mid(a)], [6, mid(b)], [b.x, mid(b)]]))
  }

  return paths
}

function SerpentineDiagram({ steps, loop }) {
  const items = steps.map(normalise)
  const n = items.length
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const [cols, setCols] = useState(desiredCols(n))
  const [geo, setGeo] = useState(null)
  const markerId = useId()

  useLayoutEffect(() => {
    const cont = containerRef.current
    if (!cont) return

    const measure = () => {
      const maxCols = Math.max(1, Math.min(4, Math.floor(cont.clientWidth / 165)))
      const want = Math.min(desiredCols(n), maxCols)
      if (want !== cols) {
        setCols(want)
        return
      }
      const box = cont.getBoundingClientRect()
      const cards = cardRefs.current.slice(0, n).map((el) => {
        const r = el.getBoundingClientRect()
        return { x: r.left - box.left, y: r.top - box.top, w: r.width, h: r.height }
      })
      setGeo({ w: box.width, h: box.height, cards })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(cont)
    return () => ro.disconnect()
  }, [cols, n])

  const arrows = geo ? buildArrows(geo.cards, geo.w, geo.h, cols, n, loop) : []

  return (
    <div className="serp" ref={containerRef}>
      {geo && (
        <svg className="serp-svg" viewBox={`0 0 ${geo.w} ${geo.h}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id={markerId} markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0 0 L7 3 L0 6 Z" fill="var(--ink)" />
            </marker>
          </defs>
          {arrows.map((d, i) => (
            <path key={i} d={d} className="serp-arc" markerEnd={`url(#${markerId})`} />
          ))}
        </svg>
      )}

      <div className="serp-grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {items.map((step, i) => {
          const c = PALETTE[i % PALETTE.length]
          const { r, col } = gridCell(i, cols)
          return (
            <div
              key={step.label}
              ref={(el) => (cardRefs.current[i] = el)}
              className="snode"
              style={{ '--accent': c.accent, '--bg': c.bg, '--border': c.border, gridRow: r + 1, gridColumn: col + 1 }}
            >
              <span className="snode-badge">{String(i + 1).padStart(2, '0')}</span>
              <div className="snode-body">
                {step.icon && <Icon name={step.icon} className="snode-icon" />}
                <div className="snode-text">
                  <div className="snode-title">{step.label}</div>
                  <div className="snode-accent" />
                  {step.desc && <div className="snode-desc">{step.desc}</div>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PyramidDiagram({ steps }) {
  const items = steps.map(normalise)
  const n = items.length
  return (
    <div className="pyramid">
      {items.map((step, i) => {
        const width = n <= 1 ? 70 : 40 + i * (50 / (n - 1))
        const c = PALETTE[i % PALETTE.length]
        return (
          <div
            key={step.label}
            className="pyramid-tier"
            style={{ '--w': `${width}%`, '--accent': c.accent, '--bg': c.bg, '--border': c.border }}
          >
            {step.icon && <Icon name={step.icon} className="pyramid-icon" />}
            <span>{step.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function VisualModel({ visual }) {
  if (!visual) return null

  return (
    <div className="diagram">
      {visual.label && <div className="diagram-label">{visual.label}</div>}
      {visual.kind === 'pyramid' ? (
        <PyramidDiagram steps={visual.steps} />
      ) : (
        <SerpentineDiagram steps={visual.steps} loop={visual.loop !== false} />
      )}
    </div>
  )
}
