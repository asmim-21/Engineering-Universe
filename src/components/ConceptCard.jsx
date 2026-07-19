import { navigate } from '../router.js'

const PREVIEW_COUNT = 3

export default function ConceptCard({ topic, popup }) {
  // Steps may be plain strings or { label, ... } objects.
  const steps = (popup.visual?.steps ?? []).map((s) => (typeof s === 'string' ? s : s.label))
  const preview = steps.slice(0, PREVIEW_COUNT)
  const remaining = steps.length - preview.length

  return (
    <button
      className="concept-card"
      style={{ '--tone': `var(--${topic.tone})` }}
      onClick={() => navigate(`/topic/${topic.id}/${popup.id}`)}
    >
      <div className="concept-card-head">
        <h3 className="concept-card-title">{popup.title}</h3>
        <span className="concept-card-pin" />
      </div>
      <p>{popup.blurb}</p>
      {steps.length > 0 && (
        <div className="concept-card-preview">
          {preview.map((step) => (
            <span key={step}>{step}</span>
          ))}
          {remaining > 0 && <span className="more">+{remaining}</span>}
        </div>
      )}
    </button>
  )
}
