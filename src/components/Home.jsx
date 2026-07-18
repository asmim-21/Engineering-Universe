import { topics } from '../data/content.js'
import TopicCard from './TopicCard.jsx'

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="hero">
        <h1>
          The Software
          <br />
          Engineering <em className="highlight">Universe</em>
        </h1>
        <p>Six regions of engineering thinking. Pick one, open a sketch card, learn the loop.</p>
      </div>

      <div className="map">
        {/* Odd topics (1, 3, 5) go left and even topics (2, 4, 6) go right,
            so cards read left-to-right, top-to-bottom like text — 1 next to
            2, 3 next to 4 — instead of top-to-bottom down one side first. */}
        <div className="map-col">
          {topics.filter((_, i) => i % 2 === 0).map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>

        <div className="core-card">
          <div className="kicker">At the centre</div>
          <h2>Engineering thinking</h2>
          <p>"I do not know yet, so I need to investigate, break it down, and form a plan."</p>
        </div>

        <div className="map-col">
          {topics.filter((_, i) => i % 2 === 1).map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  )
}
