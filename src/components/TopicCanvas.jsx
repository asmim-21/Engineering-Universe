import { topics, toolkit, safetyBoundary } from '../data/content.js'
import { navigate } from '../router.js'
import VisualModel from './VisualModel.jsx'

function TopicSection({ section, topic, popupById, colorClass }) {
  if (!section) return null

  // Render different section types based on their structure
  if (section.items && Array.isArray(section.items)) {
    // Simple list of items
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ul className="section-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (section.mindset) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="mindset-items">
          {section.mindset.map((item, i) => (
            <div key={i} className="mindset-step">
              <span className="step-num">{item.step}</span>
              <span className="step-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.toolkit) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="toolkit-grid">
          {section.toolkit.map((tool, i) => (
            <div key={i} className="toolkit-card">
              <div className="tool-num">{tool.num}</div>
              <h4>{tool.label}</h4>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.escalation) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ol className="escalation-list">
          {section.escalation.map((item, i) => (
            <li key={i}>
              <span className="step-marker">{item.step}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  if (section.criteria) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ul className="criteria-list">
          {section.criteria.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (section.prompt) {
    return (
      <div className="sketch-box section-block prompt-box">
        <h2 className={colorClass}>{section.title}</h2>
        <blockquote className="prompt-text">"{section.prompt}"</blockquote>
      </div>
    )
  }

  if (section.layers) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="layers-stack">
          {section.layers.map((layer, i) => (
            <div key={i} className="layer-item">
              <div className="layer-num">{layer.num}</div>
              <div className="layer-content">
                <h4>{layer.label}</h4>
                <p>{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.pyramid) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="pyramid-visualization">
          {section.pyramid.map((level, i) => (
            <div key={i} className={`pyramid-level level-${i}`}>
              <div className="level-label">{level.level}</div>
              <div className="level-count">{level.count}</div>
              <div className="level-desc">{level.desc}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.vcs || section.pipeline || section.models || section.containers || section.observability || section.incident) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="content-list">
          {(section.vcs || section.pipeline || section.models || section.containers || section.observability || section.incident)?.map((item, i) => {
            if (typeof item === 'string') {
              return <div key={i}>{item}</div>
            }
            if (item.stage || item.model || item.num) {
              return (
                <div key={i} className="item-row">
                  {item.stage && <span className="item-label">{item.stage}. {item.label}: </span>}
                  {item.model && <span className="item-label">{item.model}: </span>}
                  {item.num && <span className="item-label">{item.num}. {item.label}: </span>}
                  {item.desc && <span>{item.desc}</span>}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }

  if (section.logs) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="logs-grid">
          {section.logs.map((log, i) => (
            <div key={i} className="log-item">{log}</div>
          ))}
        </div>
      </div>
    )
  }

  if (section.lens) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ul className="lens-checklist">
          {section.lens.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (section.culture) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="culture-values">
          {section.culture.map((value, i) => (
            <div key={i} className="culture-item">{value}</div>
          ))}
        </div>
      </div>
    )
  }

  if (section.ladder) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ol className="ladder-visual">
          {section.ladder.map((rung, i) => (
            <li key={i}>
              <span className="rung-step">{rung.step}</span>
              <span>{rung.text}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  if (section.docs) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ul className="docs-list">
          {section.docs.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (section.stakeholders) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="stakeholders-grid">
          {section.stakeholders.map((sh, i) => (
            <div key={i} className="stakeholder-card">
              <h4>{sh.who}</h4>
              <p>{sh.concern}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.ai) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <div className="ai-guidelines">
          {section.ai.map((line, i) => (
            <div key={i} className="guideline-line">{line}</div>
          ))}
        </div>
      </div>
    )
  }

  if (section.learning) {
    return (
      <div className="sketch-box section-block">
        <h2 className={colorClass}>{section.title}</h2>
        <ul className="learning-list">
          {section.learning.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

export default function TopicCanvas({ topic }) {
  const popupById = Object.fromEntries(topic.popups.map((p) => [p.id, p]))
  const colorClass = `c-${topic.color}`

  return (
    <div className="page">
      <div className="crumbs">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Universe
        </button>
        <span className="c-ink" style={{ opacity: 0.5 }}>
          /
        </span>
        <span className={colorClass}>{topic.title}</span>
      </div>

      <div className="canvas-head">
        <span className={`region-num ${colorClass}`} style={{ width: 38, height: 38 }}>
          <span className="num-glyph" style={{ fontSize: '1.4rem' }}>
            {topic.num}
          </span>
        </span>
        <h1 className={colorClass}>{topic.title}</h1>
      </div>
      <p className="canvas-focus">{topic.focus}</p>

      <div className="true-lesson">
        <b className={colorClass}>TRUE LESSON</b> — {topic.trueLesson}
      </div>

      <div className="canvas-sections">
        {topic.sections?.map((section, i) => (
          <TopicSection
            key={i}
            section={section}
            topic={topic}
            popupById={popupById}
            colorClass={colorClass}
          />
        ))}
      </div>

      <div className="canvas-popups">
        <h2 className={colorClass}>Deep Dives</h2>
        <div className="popup-grid">
          {topic.popups.map((popup) => (
            <button
              key={popup.id}
              className={`sketch-box popup-link ${colorClass}`}
              onClick={() => navigate(`/topic/${topic.id}/${popup.id}`)}
            >
              <h3>{popup.title}</h3>
              <p>{popup.blurb}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="sketch-box alt note-card" style={{ marginBottom: 30, maxWidth: '90ch' }}>
        <b className="c-red">SAFETY BOUNDARY</b> — {safetyBoundary}
      </div>

      <div className="canvas-nav">
        <span className="label">Topics:</span>
        {topics.map((t) => (
          <button
            key={t.id}
            className={`chip c-${t.color}`}
            aria-current={t.id === topic.id ? 'page' : undefined}
            onClick={() => navigate(`/topic/${t.id}`)}
          >
            <span>
              {t.num}. {t.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
