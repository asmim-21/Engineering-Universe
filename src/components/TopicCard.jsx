import { navigate } from '../router.js'

export default function TopicCard({ topic }) {
  return (
    <button
      className="topic-card"
      style={{ '--tone': `var(--${topic.tone})` }}
      onClick={() => navigate(`/topic/${topic.id}`)}
    >
      <div className="topic-card-head">
        <span className="topic-card-badge">{topic.num}</span>
        <h3 className="topic-card-title">{topic.title}</h3>
      </div>
      <div className="topic-card-tags">
        {topic.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <span className="topic-card-go">open →</span>
    </button>
  )
}
