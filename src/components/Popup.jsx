import { navigate } from '../router.js'
import { useSheet } from './useSheet.js'
import VisualModel from './VisualModel.jsx'
import Icon from './Icon.jsx'

// "**Label:**" in point/step text renders as bold, everything else as
// plain text — a tiny markdown-lite so data files stay plain strings.
export function renderRich(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))
}

export default function Popup({ popup, siblings, onClose }) {
  const { sheetRef, closeRef } = useSheet(onClose)
  const tone = popup.tone ? `var(--${popup.tone})` : 'var(--ink)'
  const style = { '--tone': tone }
  const jumpTargets = siblings?.filter((s) => s.id !== popup.id) ?? []

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sheet" style={style} role="dialog" aria-modal="true" aria-label={popup.title} ref={sheetRef}>
        <div className="sheet-tape" />
        <button className="sheet-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          <Icon name="xmark" />
        </button>

        <div className="sheet-kicker">{popup.isToolkit ? 'Your toolkit' : 'Sketch card'}</div>
        <h2>{popup.title}</h2>
        <div className="sheet-purpose">{popup.blurb}</div>

        <section className="sheet-part">
          <div className="sheet-part-head">1 · Concept</div>
          <p>{popup.concept}</p>
          {popup.points?.length > 0 && (
            <ul className="points-list">
              {popup.points.map((point) => (
                <li key={point}>{renderRich(point)}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="sheet-part">
          <div className="sheet-part-head">2 · Visual model</div>
          <VisualModel visual={popup.visual} tone={tone} />
        </section>

        {popup.mistakes?.length > 0 && (
          <section className="sheet-part">
            <div className="sheet-part-head">3 · Common mistakes</div>
            <div className="mistakes-list">
              {popup.mistakes.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </section>
        )}

        <section className="sheet-part">
          <div className="sheet-part-head">{popup.mistakes?.length > 0 ? 4 : 3} · Reflection</div>
          <div className="reflection">
            <div className="reflection-text">{popup.reflection}</div>
          </div>
        </section>

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
