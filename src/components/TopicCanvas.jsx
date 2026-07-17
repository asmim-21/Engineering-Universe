import { topics, toolkit, safetyBoundary } from '../data/content.js'
import { navigate } from '../router.js'

const TOOLKIT_GLYPHS = ['↺', '⧉', '≡']

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

      <div className="clusters">
        {topic.clusters.map((cluster) => (
          <div className="sketch-box cluster" key={cluster.title}>
            <h2 className={colorClass}>{cluster.title}</h2>
            <p className="cluster-note">{cluster.note}</p>
            {cluster.popups.map((id) => {
              const popup = popupById[id]
              if (!popup) return null
              return (
                <button
                  key={id}
                  className={`concept-btn ${colorClass}`}
                  onClick={() => navigate(`/topic/${topic.id}/${id}`)}
                >
                  <h3>{popup.title}</h3>
                  <p>{popup.blurb}</p>
                </button>
              )
            })}
          </div>
        ))}
      </div>

      <div className="sketch-box alt note-card" style={{ marginBottom: 30, maxWidth: '90ch' }}>
        <b className="c-red">SAFETY BOUNDARY</b> — {safetyBoundary}
      </div>

      <div className="canvas-nav">
        <span className="label">Toolkit:</span>
        {toolkit.map((item, i) => (
          <button
            key={item.id}
            className="chip c-ink"
            onClick={() => navigate(`/topic/${topic.id}/${item.id}`)}
          >
            <span aria-hidden="true">{TOOLKIT_GLYPHS[i]} </span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className="canvas-nav" style={{ borderTop: 'none', paddingTop: 12 }}>
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
