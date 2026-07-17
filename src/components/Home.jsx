import { topics, toolkit, stickies } from '../data/content.js'
import { navigate } from '../router.js'
import Icon from './Icons.jsx'
import Decorations from './Decorations.jsx'
import Arrows from './Arrows.jsx'

// The six regions sit around the planet exactly as they do in the sketch:
//
//        1        (kicker)        2
//        6        [PLANET]        3
//        5      (people card)     4
//
// `tilt` just varies the lean of each hand-drawn ellipse so no two match.
// `col` indents the right-hand regions away from the planet: their content
// starts at their column's left edge, i.e. right against the corridor the
// arrows need, whereas the left-hand regions have slack there already.
const PLACEMENT = {
  'how-software-gets-built': { area: 'r1', tilt: -1.6, col: 'left' },
  'how-modern-applications-work': { area: 'r2', tilt: 1.4, col: 'right' },
  'solving-problems-like-an-engineer': { area: 'r3', tilt: -1.1, col: 'right' },
  'building-reliable-software': { area: 'r4', tilt: 1.2, col: 'right' },
  'getting-software-to-production': { area: 'r5', tilt: -1.3, col: 'left' },
  'being-an-effective-engineer': { area: 'r6', tilt: 1.5, col: 'left' }
}

function Region({ topic }) {
  const { area, tilt, col } = PLACEMENT[topic.id]
  return (
    <button
      className={`region col-${col} c-${topic.color}`}
      style={{ gridArea: area }}
      onClick={() => navigate(`/topic/${topic.id}`)}
      aria-label={`Open ${topic.title}`}
    >
      <span className="region-head">
        <span className="region-num">
          <span className="num-glyph">{topic.num}</span>
        </span>
        <span className="region-title" style={{ '--tilt': `${tilt}deg` }}>
          {/* Drawn as SVG rather than border-radius so the ring always
              encloses the title, however many lines it wraps to. */}
          <svg className="region-ellipse" viewBox="0 0 100 100" preserveAspectRatio="none">
            <ellipse
              cx="50"
              cy="50"
              rx="49"
              ry="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="region-title-text">
            {topic.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </span>
      </span>
      <span className="region-items">
        {topic.orbit.map((item) => (
          <span className="region-item" key={item.label}>
            <Icon name={item.icon} size={17} />
            <span>{item.label}</span>
          </span>
        ))}
      </span>
      <span className="region-tagline">{topic.tagline}</span>
    </button>
  )
}

export default function Home() {
  const byId = Object.fromEntries(topics.map((t) => [t.id, t]))

  return (
    <>
      <div className="page home">
        <div className="home-grid">
          {/* ---------- left rail ---------- */}
          <div className="side side-left">
            <div className="sketch-box note-card note-tilt-l">
              <span className="note-star">★</span>
              You don’t need to know everything. You just need a{' '}
              <span className="scribble">way to figure it out.</span>
            </div>

            <div className="sketch-box panel">
              <h2>
                <span className="underline c-red">Engineering Mindset</span>
              </h2>
              {stickies.mindset.map((item) => (
                <div className="mindset-item" key={item.title}>
                  <span className="mindset-icon c-ink">
                    <Icon name={item.icon} size={30} />
                  </span>
                  <span className="mindset-body">
                    <h3 className={item.highlight}>{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="sticky sticky-l">
              <span className="sticky-mark">☆</span> There is no perfect path. Keep learning and
              keep building.
              <span className="sticky-heart">♡</span>
            </div>
          </div>

          {/* ---------- the universe map ---------- */}
          <div className="map">
            <Decorations />
            <Arrows />

            <p className="home-kicker" style={{ gridArea: 'kicker' }}>
              <span className="kicker-dash left" aria-hidden="true" />
              Turning ideas into <em>impactful</em> software
              <span className="kicker-dash right" aria-hidden="true" />
            </p>

            <div className="planet-wrap" style={{ gridArea: 'planet' }}>
              <div className="planet">
                <h1>
                  <span>SOFTWARE</span>
                  <span className="accent">ENGINEERING</span>
                  <span>UNIVERSE</span>
                </h1>
                <p>
                  Explore. Click. Learn.
                  <br />
                  Connect the dots.
                </p>
              </div>
            </div>

            {topics.map((t) => (
              <Region key={t.id} topic={byId[t.id]} />
            ))}

            <div className="sketch-box note-card people-card" style={{ gridArea: 'people' }}>
              <span className="tape" aria-hidden="true" />
              Software is built by people.
              <br />
              For people.
              <br />
              Let’s build it <span className="scribble">well.</span>
              <br />
              <span className="smiley">☺</span>
            </div>
          </div>

          {/* ---------- right rail ---------- */}
          <div className="side side-right">
            <div className="sticky sticky-r">
              <span className="tape" aria-hidden="true" />
              Click any topic to explore
              <span className="cursor-mark c-ink">
                <Icon name="cursor" size={26} />
              </span>
            </div>

            <div className="panel panel-dashed">
              <h2>
                <span className="underline c-red">Your Toolkit</span>
              </h2>
              <ul className="toolkit-list">
                {toolkit.map((item) => (
                  <li key={item.id}>
                    <button
                      className="toolkit-btn"
                      onClick={() => navigate(`/toolkit/${item.id}`)}
                    >
                      <Icon name={item.icon} size={19} />
                      <span>{item.shortTitle || item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="panel-foot">
                Use these. Repeat often.
                <br />
                Level up always. <span className="c-blue">★</span>
              </p>
            </div>

            <div className="ready">
              <span className="ready-text">
                Ready?
                <br />
                Start exploring!
              </span>
              <span className="ready-arrow" aria-hidden="true">
                ➤
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="tips">
        <span className="tip">
          <span className="tip-glyph c-yellow">
            <Icon name="bulb" size={17} />
          </span>
          Tips: <span className="underline-blue">Hover</span>&nbsp;for a preview
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-ink">
            <Icon name="cursor" size={17} />
          </span>
          <span className="underline-orange">Click</span>&nbsp;to dive deeper
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-ink">
            <Icon name="bookmark" size={17} />
          </span>
          Use the toolkit anytime
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-yellow" style={{ fontSize: '1.05rem' }}>
            ★
          </span>
          Come back. Keep exploring.
        </span>
      </div>
    </>
  )
}
