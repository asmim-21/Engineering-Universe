import { navigate } from '../router.js'
import { useSheet } from './useSheet.js'
import VisualModel, { PALETTE } from './VisualModel.jsx'
import Icon from './Icon.jsx'
import { renderRich } from './richText.jsx'

const stepObj = (s) => (typeof s === 'string' ? { label: s } : s)

function SectionHead({ icon, color, children }) {
  return (
    <div className={`section-head ${color}`}>
      <Icon name={icon} />
      <span>{children}</span>
    </div>
  )
}

// ---- individual panels (each rendered only when its data exists) ----

// The intro spans the full width of the sheet, so its prose sits in a column
// beside the checklist rather than running the whole way across (unreadably
// long lines) or stopping halfway (a half-empty box). With no checklist, long
// prose flows into two newspaper columns instead so it still fills the space.
function IntroBox({ whatIs, concept, points }) {
  const paragraphs = whatIs?.text
    ? whatIs.text.split(/\n\s*\n/)
    : Array.isArray(concept) ? concept : concept ? [concept] : []
  const list = whatIs?.ensures ?? points ?? []
  const longProse = paragraphs.join(' ').length > 400
  const layout = list.length > 0 ? 'has-list' : longProse ? 'wide-prose' : ''

  return (
    <div className={`intro-box ${layout}`.trim()}>
      <SectionHead icon="lightbulb" color="sh-blue">In a nutshell</SectionHead>
      <div className="intro-grid">
        <div className="intro-prose">
          {paragraphs.map((p, i) => <p key={i}>{renderRich(p)}</p>)}
        </div>
        {list.length > 0 && (
          <ul className="check-list">
            {list.map((item) => (
              <li key={item}>
                <Icon name="circle-check" className="check-ic" />
                <span>{renderRich(item)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function StagesTable({ steps }) {
  return (
    <div className="table-scroll">
      <table className="info-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Stage</th>
            <th>Purpose</th>
            <th>Key question</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((s, i) => (
            <tr key={s.label}>
              <td className="cell-num">{String(i + 1).padStart(2, '0')}</td>
              <td className="cell-stage" style={{ color: PALETTE[i % PALETTE.length].accent }}>
                {s.icon && <Icon name={s.icon} />}
                {s.label}
              </td>
              <td>{s.purpose}</td>
              <td>{s.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Used when example items map 1:1 onto the flow diagram's steps — a short
// narrative phrase per stage (the software/computer-universe pattern).
function ExampleGrid({ steps, items }) {
  return (
    <div className="example-grid">
      {steps.map((s, i) => {
        const c = PALETTE[i % PALETTE.length]
        return (
          <div className="example-item" key={s.label} style={{ '--accent': c.accent, '--bg': c.bg, '--border': c.border }}>
            {s.icon && <Icon name={s.icon} className="ex-icon" />}
            <div className="ex-stage">{s.label}</div>
            <div className="ex-text">{renderRich(items[i])}</div>
          </div>
        )
      })}
    </div>
  )
}

// Used when there's no matching flow diagram (or the item count doesn't line
// up with it) — a reference list of commands/tips, one per line.
function ExampleList({ items }) {
  return (
    <ul className="example-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="example-list-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="example-list-text">{renderRich(item)}</span>
        </li>
      ))}
    </ul>
  )
}

// Used for a genuine multi-line code sample (a script), rendered verbatim.
function CodeBlock({ code }) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  )
}

function IoTable({ steps, inputs, outputs }) {
  return (
    <div className="table-scroll">
      <table className="info-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Inputs</th>
            <th>Outputs</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((s, i) => (
            <tr key={s.label}>
              <td className="cell-stage" style={{ color: PALETTE[i % PALETTE.length].accent }}>
                {s.icon && <Icon name={s.icon} />}
                {s.label}
              </td>
              <td>
                <ul className="io-list">{(inputs[i] ?? []).map((x) => <li key={x}>{x}</li>)}</ul>
              </td>
              <td>
                <ul className="io-list">{(outputs[i] ?? []).map((x) => <li key={x}>{x}</li>)}</ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function WhoTable({ steps, who }) {
  return (
    <div className="table-scroll">
      <table className="info-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Who is involved</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((s, i) => (
            <tr key={s.label}>
              <td className="cell-stage" style={{ color: PALETTE[i % PALETTE.length].accent }}>
                {s.icon && <Icon name={s.icon} />}
                {s.label}
              </td>
              <td>{who[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Misconceptions({ pairs, mistakes }) {
  if (pairs?.length) {
    return (
      <div className="miscon-pairs">
        {pairs.map((p) => (
          <div className="miscon-pair" key={p.wrong}>
            <div className="miscon-cell wrong">
              <Icon name="xmark" />
              <span>{p.wrong}</span>
            </div>
            <div className="miscon-cell right">
              <Icon name="check" />
              <span>{p.right}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="miscon-grid">
      {mistakes.map((m) => (
        <div className="miscon" key={m}>
          <Icon name="xmark" />
          <span>{m}</span>
        </div>
      ))}
    </div>
  )
}

export default function Popup({ popup, siblings, onClose }) {
  const { sheetRef, closeRef } = useSheet(onClose)
  const tone = popup.tone ? `var(--${popup.tone})` : 'var(--ink)'
  const jumpTargets = siblings?.filter((s) => s.id !== popup.id) ?? []

  const steps = (popup.visual?.steps ?? []).map(stepObj)
  const isPyramid = popup.visual?.kind === 'pyramid'
  const isLoop = !isPyramid && popup.visual?.loop !== false
  const flowLabel = isPyramid ? 'The layers' : isLoop ? 'The loop' : 'The flow'

  const hasStages = steps.some((s) => s.purpose || s.question)
  const hasMistakes = popup.misconceptions?.length || popup.mistakes?.length

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sheet" style={{ '--tone': tone }} role="dialog" aria-modal="true" aria-label={popup.title} ref={sheetRef}>
        <div className="sheet-tape" />
        <button className="sheet-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          <Icon name="xmark" />
        </button>

        <h2 className="sheet-title">{popup.title}</h2>
        <div className="sheet-purpose">{popup.blurb}</div>

        <div className="card-body">
          <section className="card-section col-2">
            <IntroBox whatIs={popup.whatIs} concept={popup.concept} points={popup.points} />
          </section>

          {popup.visual && (
            <section className="card-section col-2">
              <div className="section-pill-wrap">
                <span className="section-pill">{flowLabel}</span>
              </div>
              <VisualModel visual={popup.visual} />
            </section>
          )}

          {hasStages && (
            <section className="card-section col-2">
              <SectionHead icon="table-list" color="sh-teal">Stages at a glance</SectionHead>
              <StagesTable steps={steps} />
            </section>
          )}

          {popup.example && (
            <section className="card-section col-2">
              <SectionHead icon="lightbulb" color="sh-green">Running example — {popup.example.title}</SectionHead>
              {popup.example.code ? (
                <CodeBlock code={popup.example.code} />
              ) : steps.length > 0 && steps.length === popup.example.items.length ? (
                <ExampleGrid steps={steps} items={popup.example.items} />
              ) : (
                <ExampleList items={popup.example.items} />
              )}
            </section>
          )}

          {popup.io && (
            <section className="card-section col-2">
              <SectionHead icon="right-long" color="sh-blue">Inputs → outputs</SectionHead>
              <IoTable steps={steps} inputs={popup.io.inputs} outputs={popup.io.outputs} />
            </section>
          )}

          {popup.who && (
            <section className="card-section">
              <SectionHead icon="users" color="sh-purple">Who is involved</SectionHead>
              <WhoTable steps={steps} who={popup.who} />
            </section>
          )}

          {hasMistakes && (
            <section className="card-section col-2">
              <SectionHead icon="triangle-exclamation" color="sh-red">Common misconceptions</SectionHead>
              <Misconceptions pairs={popup.misconceptions} mistakes={popup.mistakes} />
            </section>
          )}

          {popup.takeaways?.length > 0 && (
            <section className="card-section">
              <SectionHead icon="star" color="sh-gold">Key takeaways</SectionHead>
              <ul className="takeaways">
                {popup.takeaways.map((t) => (
                  <li key={t}>
                    <Icon name="star" />
                    <span>{renderRich(t)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="card-section">
            <SectionHead icon="circle-question" color="sh-gold">Reflection</SectionHead>
            <div className="reflect-box">{renderRich(popup.reflection)}</div>
          </section>

          {popup.checks?.length > 0 && (
            <section className="card-section">
              <SectionHead icon="clipboard-check" color="sh-ink">Check your understanding</SectionHead>
              <div className="checks">
                {popup.checks.map((q, i) => (
                  <div className="check-item" key={q}>
                    <span className="check-num">{i + 1}</span>
                    <span>{renderRich(q)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {jumpTargets.length > 0 && (
          <div className="jump-nav">
            <span className="jump-nav-label">More in this region</span>
            {jumpTargets.map((s) => (
              <button key={s.id} onClick={() => navigate(`/topic/${popup.topicId}/${s.id}`)}>
                {s.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
