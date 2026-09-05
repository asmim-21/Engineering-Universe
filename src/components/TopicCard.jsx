import { navigate } from '../router.js'

// `--order` lets the stacked mobile layout put the cards back in 1..n order
// after the desktop two-column split has interleaved them.
export default function TopicCard({ topic }) {
  return (
    <button
      className="topic-card"
      style={{ '--tone': `var(--${topic.tone})`, '--order': topic.num }}
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
