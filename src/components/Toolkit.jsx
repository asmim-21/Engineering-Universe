import { useSheet } from './useSheet.js'
import VisualModel from './VisualModel.jsx'
import Icon from './Icon.jsx'

export default function Toolkit({ universe, onClose }) {
  const { sheetRef, closeRef } = useSheet(onClose)
  const loops = universe.toolkit

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label="Toolkit" ref={sheetRef}>
        <div className="sheet-tape" />
        <button className="sheet-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          <Icon name="xmark" />
        </button>

        <div className="sheet-kicker">{universe.name} · Global toolkit</div>
        <h2>Three loops you can use anywhere</h2>
        <div className="sheet-purpose">Cross-cutting engineering behaviours that appear throughout the whole universe.</div>

        {loops.map((loop) => (
          <div className="sheet-part kit-loop" key={loop.id}>
            <h3>{loop.title}</h3>
            <p>{loop.concept}</p>
            <VisualModel visual={loop.visual} />
            <div className="reflection" style={{ marginTop: 14 }}>
              <div className="reflection-text">{loop.reflection}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
