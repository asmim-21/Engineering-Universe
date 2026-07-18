import Icon from './Icon.jsx'

// Circular loop diagram. Nodes sit evenly around a ring; between each pair of
// consecutive nodes (and from the last back to the first) an SVG arc carries a
// real arrowhead marker, so the arrows follow the path and point the right way
// instead of being faked with rotated glyphs. The radius is derived from the
// node count so boxes are always spaced far enough apart never to collide.
const NODE_W = 148

function polar(cx, cy, r, deg) {
  const rad = (deg * Math.PI) / 180
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
}

function LoopDiagram({ steps, tone }) {
  const n = steps.length
  const angleAt = (i) => -90 + (360 / n) * i // node 1 at 12 o'clock, clockwise

  // Chord between adjacent node centres must exceed the box width plus a gap,
  // which fixes the radius; small n gets a sensible minimum so it isn't tiny.
  const R = Math.max(96, (NODE_W + 46) / (2 * Math.sin(Math.PI / n)))
  const S = Math.round(2 * R + NODE_W + 30) // square canvas that fits every box
  const c = S / 2

  // Each arc spans the middle of the gap between two nodes, leaving room at
  // both ends so the line and its arrowhead sit clear of the boxes.
  const gap = 360 / n
  const pad = Math.min((Math.atan((NODE_W / 2 + 12) / R) * 180) / Math.PI, gap * 0.34)
  const arcs = steps.map((_, i) => {
    const [ax, ay] = polar(c, c, R, angleAt(i) + pad)
    const [bx, by] = polar(c, c, R, angleAt(i + 1) - pad)
    return `M ${ax} ${ay} A ${R} ${R} 0 0 1 ${bx} ${by}`
  })

  return (
    <div className="loop-diagram" style={{ width: S, aspectRatio: '1 / 1' }}>
      <svg className="loop-svg" viewBox={`0 0 ${S} ${S}`} aria-hidden="true">
        <defs>
          <marker
            id="loop-arrowhead"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0 0 L7 3 L0 6 Z" fill="var(--ink)" />
          </marker>
        </defs>
        {arcs.map((d, i) => (
          <path key={i} d={d} className="loop-arc" markerEnd="url(#loop-arrowhead)" />
        ))}
      </svg>

      <Icon name="arrows-rotate" className="loop-center" />

      {steps.map((step, i) => {
        const [x, y] = polar(c, c, R, angleAt(i))
        return (
          <div
            key={step}
            className="flow-box loop-node"
            style={{ left: `${(x / S) * 100}%`, top: `${(y / S) * 100}%` }}
          >
            <span className="flow-box-index" style={{ '--tone': tone }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            {step}
          </div>
        )
      })}
    </div>
  )
}

function PyramidDiagram({ steps }) {
  const n = steps.length
  return (
    <div className="pyramid">
      {steps.map((step, i) => {
        const width = n <= 1 ? 70 : 40 + i * (50 / (n - 1))
        return (
          <div key={step} className="flow-box" style={{ '--w': `${width}%` }}>
            {step}
          </div>
        )
      })}
    </div>
  )
}

export default function VisualModel({ visual, tone }) {
  if (!visual) return null

  return (
    <div className="diagram">
      <div className="diagram-label">{visual.label}</div>
      {visual.kind === 'pyramid' ? (
        <PyramidDiagram steps={visual.steps} />
      ) : (
        <LoopDiagram steps={visual.steps} tone={tone} />
      )}
    </div>
  )
}
