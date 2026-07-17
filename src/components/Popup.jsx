import { useEffect, useRef } from 'react'
import VisualModel from './VisualModel.jsx'

const PARTS = ['Concept', 'Visual Model', 'Common Mistakes', 'Reflection / Challenge']

export default function Popup({ popup, onClose }) {
  const cardRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return

      // Keep focus inside the sheet while it is open.
      const focusables = cardRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables?.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const colorClass = `c-${popup.color || 'ink'}`
  const paragraphs = Array.isArray(popup.concept) ? popup.concept : [popup.concept]

  return (
    <div
      className="overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        ref={cardRef}
      >
        <button className="popup-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          ✕
        </button>

        <p className="popup-eyebrow">
          {popup.isToolkit ? 'Your Toolkit' : 'Deep dive'}
        </p>
        <h2 id="popup-title" className={colorClass}>
          {popup.title}
        </h2>
        <p className="popup-blurb">{popup.blurb}</p>

        <section className="part">
          <div className="part-head">
            <span className="part-num">1</span>
            <h3 className={colorClass}>{PARTS[0]}</h3>
          </div>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section className="part">
          <div className="part-head">
            <span className="part-num">2</span>
            <h3 className={colorClass}>{PARTS[1]}</h3>
          </div>
          <VisualModel visual={popup.visual} colorClass={colorClass} />
        </section>

        <section className="part">
          <div className="part-head">
            <span className="part-num">3</span>
            <h3 className={colorClass}>{PARTS[2]}</h3>
          </div>
          <ul className="mistakes">
            {popup.mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="part" style={{ marginBottom: 0 }}>
          <div className="part-head">
            <span className="part-num">4</span>
            <h3 className={colorClass}>{PARTS[3]}</h3>
          </div>
          <div className="reflection">{popup.reflection}</div>
        </section>
      </div>
    </div>
  )
}
