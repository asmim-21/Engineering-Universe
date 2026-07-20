import { universeById } from '../data/content.js'
import { navigate } from '../router.js'
import ConceptCard from './ConceptCard.jsx'

export default function TopicCanvas({ topic }) {
  const tone = { '--tone': `var(--${topic.tone})` }
  const universe = universeById[topic.universe]
  const topics = universe.topics

  return (
    <div className="page-wrap">
      <div className="crumb">
        <button onClick={() => navigate(`/${universe.id}`)}>{universe.name}</button> › <span>{topic.title}</span>
      </div>

      <div className="topic-header" style={tone}>
        <div className="topic-header-top">
          <div className="topic-header-badge">{topic.num}</div>
          <h1>{topic.title}</h1>
        </div>
        <div className="topic-header-blurb">{topic.blurb}</div>
        <div className="topic-header-hint">Tap any card to open the sketch.</div>
      </div>

      <div className="concept-grid">
        {topic.popups.map((popup) => (
          <ConceptCard key={popup.id} topic={topic} popup={popup} />
        ))}
      </div>

      <div className="topic-nav">
        <span className="topic-nav-label">All topics</span>
        {topics.map((t) => (
          <button
            key={t.id}
            className="topic-nav-chip"
            aria-current={t.id === topic.id ? 'page' : undefined}
            onClick={() => navigate(`/topic/${t.id}`)}
          >
            {t.num}. {t.title}
          </button>
        ))}
      </div>
    </div>
  )
}
