// The scattered "space" marks around the universe map: stars, sparkles, small
// planets, and the rocket. Purely decorative, so all of it is aria-hidden and
// positioned in percentages over the map.

// Positions are in the map's own coordinate space, which has a predictable
// shape: the six regions sit in three columns (0-32%, 34-66%, 68-100%) and
// three rows (0-28%, 30-70%, 72-100%), with the planet filling the middle.
// That leaves empty corridors at x 32-38% and x 62-68%, plus bands above and
// below the planet — everything below is placed in those gaps so no mark ever
// lands on text.
const STARS = [
  { top: '10%', left: '34%', size: 15, color: 'var(--yellow)', rot: -8 },
  { top: '13%', left: '64%', size: 12, color: 'var(--yellow)', rot: 14 },
  { top: '24%', left: '33%', size: 12, color: 'var(--purple)', rot: 6 },
  { top: '21%', left: '52%', size: 11, color: 'var(--yellow)', rot: 8 },
  { top: '29%', left: '61%', size: 14, color: 'var(--yellow)', rot: -12 },
  { top: '57%', left: '33%', size: 13, color: 'var(--blue)', rot: -6 },
  { top: '71%', left: '36%', size: 17, color: 'var(--yellow)', rot: 4 },
  { top: '70%', left: '63%', size: 13, color: 'var(--blue)', rot: -10 },
  { top: '69%', left: '61%', size: 11, color: 'var(--blue)', rot: 5 }
]

const SPARKS = [
  { top: '34%', left: '36%', size: 11, color: 'var(--red)' },
  { top: '35%', left: '64%', size: 10, color: 'var(--yellow)' },
  { top: '66%', left: '34%', size: 11, color: 'var(--red)' },
  { top: '65%', left: '65%', size: 9, color: 'var(--ink-soft)' },
  { top: '26%', left: '46%', size: 10, color: 'var(--ink-soft)' }
]

function Star({ size, color, rot }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rot}deg)` }}>
      <path
        d="M12 2.4 14.9 9l7.1.6-5.4 4.7 1.6 6.9L12 17.5l-6.2 3.7 1.6-6.9L2 9.6 9.1 9z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Spark({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12 1.6c.8 5.4 4.2 8.8 9.6 10.4-5.4 1.6-8.8 5-9.6 10.4-.8-5.4-4.2-8.8-9.6-10.4C7.8 10.4 11.2 7 12 1.6z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  )
}

export default function Decorations() {
  return (
    <div className="decor" aria-hidden="true">
      {/* Rocket, arcing away from the planet */}
      <svg className="decor-item rocket" viewBox="0 0 64 64" width="62" height="62">
        <path
          d="M32 4c9 6 14 16 14 27l-6 8H24l-6-8C18 20 23 10 32 4z"
          fill="#fffdf7"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="24" r="5" fill="#dfe8f1" stroke="var(--ink)" strokeWidth="2.2" />
        <path
          d="M24 39c-5 2-8 6-9 12 6-1 10-4 12-9M40 39c5 2 8 6 9 12-6-1-10-4-12-9"
          fill="var(--red)"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M28 47c1.5 5 2.5 8 4 11 1.5-3 2.5-6 4-11z"
          fill="var(--yellow)"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      {/* Small orbiting planets */}
      <svg className="decor-item planet-sm planet-a" viewBox="0 0 40 40" width="34" height="34">
        <circle cx="20" cy="20" r="10" fill="#cfe0f0" stroke="var(--ink)" strokeWidth="2" />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          transform="rotate(-20 20 20)"
        />
      </svg>
      <svg className="decor-item planet-sm planet-b" viewBox="0 0 40 40" width="26" height="26">
        <circle cx="20" cy="20" r="11" fill="#e7d6f2" stroke="var(--ink)" strokeWidth="2" />
        <path d="M13 16c4 2 9 2 14 0M14 24c4 2 8 2 12 0" stroke="var(--ink)" strokeWidth="1.6" fill="none" />
      </svg>
      <svg className="decor-item planet-sm planet-c" viewBox="0 0 40 40" width="22" height="22">
        <circle cx="20" cy="20" r="10" fill="#d9ecdf" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="16" cy="17" r="2.4" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      </svg>

      {/* Speed marks, like the little dashes in the sketch */}
      <svg className="decor-item dash dash-a" viewBox="0 0 40 14" width="34" height="12">
        <path d="M2 4h36M8 10h24" stroke="var(--blue)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <svg className="decor-item dash dash-b" viewBox="0 0 40 14" width="30" height="11">
        <path d="M2 4h36M8 10h24" stroke="var(--blue)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      {STARS.map((s, i) => (
        <span className="decor-item" key={`star-${i}`} style={{ top: s.top, left: s.left }}>
          <Star {...s} />
        </span>
      ))}
      {SPARKS.map((s, i) => (
        <span className="decor-item" key={`spark-${i}`} style={{ top: s.top, left: s.left }}>
          <Spark {...s} />
        </span>
      ))}
    </div>
  )
}
