// Renders the hand-drawn "visual model" section of a popup.
// Each popup declares a `kind`; everything is drawn with CSS, no chart library.

function Steps({ steps, arrows = false, className = '' }) {
  return (
    <ol className={`steps ${className}`}>
      {steps.map((step, i) => (
        <li key={step}>
          <div className="step">
            <span className="step-n">{i + 1}</span>
            <span>{step}</span>
          </div>
          {arrows && i < steps.length - 1 && (
            <div className="step-arrow" aria-hidden="true">
              ↓
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

export default function VisualModel({ visual, colorClass }) {
  if (!visual) return null

  let body

  switch (visual.kind) {
    case 'flow':
      body = <Steps steps={visual.steps} arrows />
      break

    case 'loop':
      body = (
        <>
          <Steps steps={visual.steps} arrows />
          <p className="visual-purpose" aria-hidden="true">
            ↺ back to the start — the loop repeats.
          </p>
        </>
      )
      break

    case 'ladder':
      body = <Steps steps={visual.steps} className="ladder" />
      break

    case 'pyramid':
      body = (
        <ol className="steps pyramid">
          {visual.steps.map((step) => (
            <li key={step} className="step">
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )
      break

    case 'columns':
      body = (
        <div className="columns">
          <div className="column">
            <h4 className="c-green">{visual.left.heading}</h4>
            <ul>
              {visual.left.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h4 className="c-red">{visual.right.heading}</h4>
            <ul>
              {visual.right.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
      break

    case 'compare':
      body = (
        <>
          <div className="compare-block c-red">
            <span className="compare-label">Weak question</span>
            <p className="compare-quote">“{visual.weak}”</p>
          </div>
          <div className="compare-block c-green">
            <span className="compare-label">Stronger question</span>
            <p className="compare-quote">“{visual.strong}”</p>
          </div>
        </>
      )
      break

    case 'list':
    default:
      body = (
        <ul className="steps">
          {visual.steps.map((step) => (
            <li key={step} className="step">
              <span className="step-n" aria-hidden="true">
                ◆
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      )
  }

  return (
    <div className={`visual ${colorClass}`}>
      <h4 className="visual-title">{visual.title}</h4>
      <div className="c-ink">{body}</div>
      {visual.purpose && <p className="visual-purpose">Purpose: {visual.purpose}</p>}
    </div>
  )
}
