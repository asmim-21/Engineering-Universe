// The curved arrows running from the planet out to each of the six regions.
//
// preserveAspectRatio="none" is the important part: it makes the 0-100 viewBox
// map linearly onto the map's box, so these numbers are literally map
// percentages. With the default (xMidYMid meet) the coordinates get uniformly
// scaled and centred, which squeezes the horizontal arrows in behind the planet.
//
// The planet occupies roughly x 37-63, y 34-66, so every arrow starts just
// outside that edge and ends short of its region's ellipse.
const ARROWS = [
  { d: 'M38,38 C33,36 28,32 26.5,26.5' }, // to 1, up-left
  { d: 'M62,38 C67,36 72,32 73.5,26.5' }, // to 2, up-right
  { d: 'M36,52 C32.5,51.5 30,51 28,49.5' }, // to 6, left
  { d: 'M64,52 C67.5,51.5 70,51 72,49.5' }, // to 3, right
  { d: 'M38,62 C34,64.5 30.5,67 29.5,70.5' }, // to 5, down-left
  { d: 'M62,62 C66,64.5 69.5,67 70.5,70.5' } // to 4, down-right
]

export default function Arrows() {
  return (
    <svg
      className="arrows"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
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
        {ARROWS.map((a) => (
          // vector-effect keeps the stroke an even weight despite the
          // non-uniform scale, which would otherwise squash it.
          <path key={a.d} d={a.d} strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  )
}
