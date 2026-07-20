import { universes } from '../data/content.js'
import { navigate } from '../router.js'
import TopicCard from './TopicCard.jsx'

export default function Home({ universe }) {
  const topics = universe.topics
  const { hero, core } = universe

  return (
    <div className="page-wrap">
      {/* Toggle between the two universes — the map is shared, the content swaps. */}
      <div className="universe-switch" role="tablist" aria-label="Choose a universe">
        {universes.map((u) => (
          <button
            key={u.id}
            role="tab"
            className="universe-tab"
            aria-selected={u.id === universe.id}
            onClick={() => navigate(`/${u.id}`)}
          >
            {u.name}
          </button>
        ))}
      </div>

      <div className="hero">
        <h1>
          {hero.line1}
          <br />
          {hero.line2} <em className="highlight">{hero.em}</em>
        </h1>
        <p>{hero.blurb}</p>
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
          <div className="kicker">{core.kicker}</div>
          <h2>{core.title}</h2>
          <p>{core.quote}</p>
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
