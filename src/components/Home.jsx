import { topics, toolkit, stickies } from '../data/content.js'
import { navigate } from '../router.js'
import Icon from './Icon.jsx'

// The space doodles around the planet — all Font Awesome icons, nothing
// hand-drawn: one rocket, one crescent moon, and a few small twinkling stars
// (`variant: 'regular'` = outline style). Everything is anchored to the planet
// itself with fixed pixel offsets (negative = outside its edge), so doodles
// always hug the planet and can never drift onto surrounding text — they are
// placed in the gaps between the six arrows. `cls: 'sparkle'` makes one twinkle.
// No emoji: full-colour emoji clash with the ink-and-marker look.
const PLANET_DOODLES = [
  { icon: 'rocket', top: '-52px', right: '78px', size: 32, color: 'var(--red)', rotate: 24 },
  { icon: 'moon', top: '54px', right: '-44px', size: 15, color: 'var(--yellow)', rotate: -18 },
  { icon: 'star', cls: 'sparkle', top: '-14px', left: '-34px', size: 13, color: 'var(--yellow)', rotate: -10 },
  { icon: 'star', variant: 'regular', cls: 'sparkle', top: '100px', left: '-46px', size: 12, color: 'var(--purple)', rotate: 12 },
  { icon: 'star', variant: 'regular', cls: 'sparkle', bottom: '-30px', left: '92px', size: 13, color: 'var(--blue)' },
  { icon: 'star', cls: 'sparkle', bottom: '-22px', right: '64px', size: 10, color: 'var(--yellow)', rotate: 8 },
  { icon: 'star', variant: 'regular', cls: 'sparkle', bottom: '96px', right: '-42px', size: 12, color: 'var(--yellow)', rotate: -8 }
]

function PlanetDoodles() {
  return (
    <span aria-hidden="true">
      {PLANET_DOODLES.map((d, i) => (
        <span
          key={i}
          className={`planet-doodle ${d.cls || ''}`}
          style={{
            top: d.top,
            right: d.right,
            bottom: d.bottom,
            left: d.left,
            fontSize: d.size,
            color: d.color,
            transform: d.rotate ? `rotate(${d.rotate}deg)` : undefined,
            // stagger the twinkle so sparkles don't pulse in unison
            animationDelay: d.cls === 'sparkle' ? `${(i * 0.7) % 3.5}s` : undefined
          }}
        >
          <Icon name={d.icon} variant={d.variant} />
        </span>
      ))}
    </span>
  )
}

// The six curved ink arrows flying out from the planet toward each region,
// as in the sketch. Drawn over the planet's own box (viewBox 0-100 = the
// planet circle), so like the doodles they are anchored to the planet and
// reach only a fixed distance past its edge — they can never touch the
// region text. One path string per arrow; edit or add freely.
const ARROWS = [
  'M14 17 C7 12, 2 6, -3 -4', // up-left, to region 1
  'M86 17 C93 12, 98 6, 103 -4', // up-right, to region 2
  'M102 47 C108 46, 112 44, 116 41', // right, to region 3
  'M86 84 C93 89, 98 95, 103 105', // down-right, to region 4
  'M14 84 C7 89, 2 95, -3 105', // down-left, to region 5
  'M-2 47 C-8 46, -12 44, -16 41' // left, to region 6
]

function PlanetArrows() {
  return (
    <svg className="planet-arrows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4.5"
          markerHeight="4.5"
          orient="auto-start-reverse"
          markerUnits="strokeWidth"
        >
          <path d="M0 1.5 9 5 0 8.5z" fill="var(--ink)" />
        </marker>
      </defs>
      <g fill="none" stroke="var(--ink)" strokeLinecap="round" markerEnd="url(#arrowhead)">
        {ARROWS.map((d) => (
          <path key={d} d={d} strokeWidth="2.3" vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  )
}

// The six regions sit around the planet, in topic order:
//
//        1        (kicker)        2
//        6        [PLANET]        3
//        5      (people card)     4
//
// Each slot is a named grid area plus a small tilt so no two titles lean the
// same way. Slots are assigned by array order, so reordering or renaming
// topics in the data needs no change here.
const SLOTS = [
  { area: 'r1', tilt: -1.6 },
  { area: 'r2', tilt: 1.4 },
  { area: 'r3', tilt: -1.1 },
  { area: 'r4', tilt: 1.2 },
  { area: 'r5', tilt: -1.3 },
  { area: 'r6', tilt: 1.5 }
]

function Region({ topic, slot }) {
  return (
    <button
      className={`region c-${topic.color}`}
      style={{ gridArea: slot.area }}
      onClick={() => navigate(`/topic/${topic.id}`)}
      aria-label={`Open ${topic.title}`}
    >
      <span className="region-head">
        <span className="region-num">
          <span className="num-glyph">{topic.num}</span>
        </span>
        <span className="region-title" style={{ '--tilt': `${slot.tilt}deg` }}>
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
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </span>
        ))}
      </span>
      <span className="region-tagline">{topic.tagline}</span>
    </button>
  )
}

export default function Home() {
  return (
    <>
      <div className="page home">
        <div className="home-grid">
          {/* ---------- left rail ---------- */}
          <div className="side side-left">
            <div className="sketch-box note-card note-tilt-l">
              <Icon name="star" className="note-star" />
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
                    <Icon name={item.icon} />
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
              <Icon name="star" variant="regular" className="sticky-mark" /> There is no perfect
              path. Keep learning and keep building.
              <Icon name="heart" variant="regular" className="sticky-heart" />
            </div>
          </div>

          {/* ---------- the universe map ---------- */}
          <div className="map">
            <p className="home-kicker" style={{ gridArea: 'kicker' }}>
              {/* Short red double-dashes each side, as in the sketch. */}
              <span className="kicker-dash left" aria-hidden="true">
                =
              </span>
              Turning ideas into <em>impactful</em> software
              <span className="kicker-dash right" aria-hidden="true">
                =
              </span>
            </p>

            <div className="planet-wrap" style={{ gridArea: 'planet' }}>
              <div className="planet">
                <PlanetDoodles />
                <PlanetArrows />
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

            {topics.slice(0, SLOTS.length).map((topic, i) => (
              <Region key={topic.id} topic={topic} slot={SLOTS[i]} />
            ))}

            <div className="sketch-box note-card people-card" style={{ gridArea: 'people' }}>
              <span className="tape" aria-hidden="true" />
              Software is built by people.
              <br />
              For people.
              <br />
              Let’s build it <span className="scribble">well.</span>
              <br />
              <Icon name="face-smile" variant="regular" className="smiley" />
            </div>
          </div>

          {/* ---------- right rail ---------- */}
          <div className="side side-right">
            <div className="sticky sticky-r">
              <span className="tape" aria-hidden="true" />
              Click any topic to explore
              <span className="cursor-mark c-ink">
                <Icon name="arrow-pointer" />
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
                      <Icon name={item.icon} />
                      <span>{item.shortTitle || item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="panel-foot">
                Use these. Repeat often.
                <br />
                Level up always. <Icon name="star" variant="regular" className="c-blue" />
              </p>
            </div>

            <div className="ready">
              <Icon name="star" className="ready-spark top" />
              <span className="ready-text">
                Ready?
                <br />
                Start exploring!
              </span>
              <Icon name="star" variant="regular" className="ready-spark bottom" />
            </div>
          </div>
        </div>
      </div>

      <div className="tips">
        <span className="tip">
          <span className="tip-glyph c-yellow">
            <Icon name="lightbulb" />
          </span>
          Tips: <span className="underline-blue">Hover</span>&nbsp;for a preview
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-ink">
            <Icon name="arrow-pointer" />
          </span>
          <span className="underline-orange">Click</span>&nbsp;to dive deeper
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-ink">
            <Icon name="bookmark" />
          </span>
          Use the toolkit anytime
        </span>
        <span className="tip-div" aria-hidden="true" />
        <span className="tip">
          <span className="tip-glyph c-yellow">
            <Icon name="star" variant="regular" />
          </span>
          Come back. Keep exploring.
        </span>
      </div>
    </>
  )
}
