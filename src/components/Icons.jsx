// Hand-drawn icon set, inline so the site ships with zero icon dependencies.
// All icons are stroked (not filled) on a 24x24 box to match the marker look.

const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

const paths = {
  // Topic 1 — how software gets built
  cycle: (
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3M19.5 12A7.5 7.5 0 0 1 6.8 17.4" {...S} />
      <path d="M17.6 3.4l-.3 3.5 3.5-.4M6.4 20.6l.3-3.5-3.5.4" {...S} />
    </>
  ),
  people: (
    <>
      <circle cx="8.5" cy="8" r="2.6" {...S} />
      <circle cx="16.4" cy="9.2" r="2" {...S} />
      <path d="M3.6 18.4c.4-3 2.4-4.7 4.9-4.7s4.5 1.7 4.9 4.7M15 13.9c2.2-.2 4.1 1.2 4.6 4.2" {...S} />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7.6" r="3.1" {...S} />
      <path d="M5.6 19.2c.5-3.7 3-5.8 6.4-5.8s5.9 2.1 6.4 5.8" {...S} />
    </>
  ),
  monitor: (
    <>
      <rect x="3.2" y="4.6" width="17.6" height="11.4" rx="1.6" {...S} />
      <path d="M9 19.6h6M12 16v3.6" {...S} />
    </>
  ),

  // Topic 2 — how modern applications work
  puzzle: (
    <>
      <path
        d="M10 4.2h4v2.1a1.7 1.7 0 1 0 3.4 0V4.2h2.4v4.3h-2a1.7 1.7 0 1 0 0 3.4h2v4.3h-4.4v-2a1.7 1.7 0 1 0-3.4 0v2H7.6v-4.1h-2a1.7 1.7 0 1 1 0-3.4h2V4.2H10z"
        {...S}
      />
    </>
  ),
  cloudflow: (
    <>
      <path d="M7.4 17.4a3.7 3.7 0 0 1-.4-7.4 5 5 0 0 1 9.6-.9 3.9 3.9 0 0 1 .3 7.7l-.4.1" {...S} />
      <path d="M12 11.6v7m0 0-2-2m2 2 2-2" {...S} />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6.2" rx="7" ry="2.7" {...S} />
      <path d="M5 6.2v11.5c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7V6.2" {...S} />
      <path d="M5 12c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7" {...S} />
    </>
  ),
  sitemap: (
    <>
      <rect x="9.4" y="3.2" width="5.4" height="4" rx="1" {...S} />
      <rect x="3.2" y="16.6" width="5.4" height="4.2" rx="1" {...S} />
      <rect x="15.4" y="16.6" width="5.4" height="4.2" rx="1" {...S} />
      <path d="M12.1 7.4v4.4M5.9 16.4v-2.6h12.2v2.6M12.1 11.8v4.6" {...S} />
    </>
  ),

  // Topic 3 — solving problems
  question: (
    <>
      <circle cx="12" cy="12" r="8.6" {...S} />
      <path d="M9.6 9.5a2.5 2.5 0 0 1 4.9.6c0 1.7-2.4 2-2.4 3.6" {...S} />
      <path d="M12.1 17.1h.01" {...S} strokeWidth="2.2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.6" cy="10.4" r="6.2" {...S} />
      <path d="M15.2 15.1 20.4 20.4" {...S} />
    </>
  ),
  flask: (
    <>
      <path d="M9.4 3.4h5.2M10.4 3.4v6L5.4 17.6c-.8 1.4.1 3 1.7 3h9.8c1.6 0 2.5-1.6 1.7-3l-5-8.2v-6" {...S} />
      <path d="M7.6 14.6h8.8" {...S} />
    </>
  ),
  ladder: (
    <>
      <path d="M7.6 3.4v17.2M16.4 3.4v17.2" {...S} />
      <path d="M7.6 7.6h8.8M7.6 12h8.8M7.6 16.4h8.8" {...S} />
    </>
  ),

  // Topic 4 — building reliable software
  check: (
    <>
      <rect x="3.6" y="3.8" width="16.8" height="16.4" rx="2.2" {...S} />
      <path d="m7.8 12.2 2.9 2.9 5.6-6.2" {...S} />
    </>
  ),
  bug: (
    <>
      <rect x="7.8" y="7.4" width="8.4" height="11.4" rx="4.2" {...S} />
      <path d="M9.4 7.4a2.6 2.6 0 0 1 5.2 0" {...S} />
      <path d="M7.8 11.4H4.2M7.8 15.6H4.4M16.2 11.4h3.6M16.2 15.6h3.6M9.2 5.4 7.6 3.6M14.8 5.4l1.6-1.8" {...S} />
    </>
  ),
  code: (
    <>
      <path d="m8.4 8-4.6 4.2 4.6 4.3M15.6 8l4.6 4.2-4.6 4.3M13.6 4.4l-3.2 15.4" {...S} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.4 4.6 6.2v5.4c0 4.3 3 7.9 7.4 9 4.4-1.1 7.4-4.7 7.4-9V6.2L12 3.4z" {...S} />
      <path d="m9 12 2.2 2.2 4-4.2" {...S} />
    </>
  ),

  // Topic 5 — getting software to production
  branch: (
    <>
      <circle cx="7" cy="5.4" r="2.4" {...S} />
      <circle cx="7" cy="18.6" r="2.4" {...S} />
      <circle cx="17.2" cy="9.2" r="2.4" {...S} />
      <path d="M7 7.8v8.4M17.2 11.6c0 3.2-2.6 4.4-6 4.8" {...S} />
    </>
  ),
  gears: (
    <>
      <circle cx="9" cy="9" r="2.6" {...S} />
      <circle cx="16" cy="15.6" r="2.2" {...S} />
      <path
        d="M9 3.6v1.8M9 12.6v1.8M3.6 9h1.8M12.6 9h1.8M5.2 5.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 5.2l-1.3 1.3M6.5 11.5l-1.3 1.3"
        {...S}
      />
      <path d="M16 11.4v1M16 19.8v1M12.2 15.6h1M18.8 15.6h1" {...S} />
    </>
  ),
  cloud: (
    <>
      <path d="M7.4 18.2a4.1 4.1 0 0 1-.4-8.2 5.3 5.3 0 0 1 10.2-1 4.3 4.3 0 0 1 .3 8.5l-.4.1z" {...S} />
    </>
  ),
  chart: (
    <>
      <rect x="3.2" y="4.6" width="17.6" height="12.2" rx="1.6" {...S} />
      <path d="m6.6 13.4 3-3.6 2.6 2.4 4.6-4.8" {...S} />
      <path d="M9 20.4h6" {...S} />
    </>
  ),

  // Topic 6 — being an effective engineer
  chat: (
    <>
      <path d="M20.2 15.6c0 1.2-1 2.2-2.2 2.2H8.6l-4.4 3.2V6.4c0-1.2 1-2.2 2.2-2.2H18c1.2 0 2.2 1 2.2 2.2z" {...S} />
    </>
  ),
  doc: (
    <>
      <path d="M14 3.4H7.2c-1 0-1.8.8-1.8 1.8v13.6c0 1 .8 1.8 1.8 1.8h9.6c1 0 1.8-.8 1.8-1.8V8z" {...S} />
      <path d="M14 3.4V8h4.6M8.6 12.4h6.8M8.6 16.2h4.6" {...S} />
    </>
  ),
  sparkles: (
    <>
      <path d="m9 3.6 1.5 3.9 3.9 1.5-3.9 1.5L9 14.4l-1.5-3.9-3.9-1.5 3.9-1.5z" {...S} />
      <path d="m17 13.4.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" {...S} />
    </>
  ),

  // Mindset panel
  bulb: (
    <>
      <path d="M9.4 17.4a6 6 0 1 1 5.2 0" {...S} />
      <path d="M9.4 17.4h5.2M10 20.4h4" {...S} />
    </>
  ),
  mountain: (
    <>
      <path d="M2.6 19.4h18.8L13.4 6.2 9.8 12l-2-3z" {...S} />
      <path d="M13.4 6.2V2.8l4 1.4-4 1.6" {...S} />
    </>
  ),
  users: (
    <>
      <circle cx="12" cy="6.6" r="2.4" {...S} />
      <circle cx="5.6" cy="10.2" r="2" {...S} />
      <circle cx="18.4" cy="10.2" r="2" {...S} />
      <path d="M7.8 16.4c.4-2.6 2-4.2 4.2-4.2s3.8 1.6 4.2 4.2M1.8 18.6c.3-2.2 1.7-3.6 3.8-3.6M18.4 15c2.1 0 3.5 1.4 3.8 3.6" {...S} />
    </>
  ),

  // Decorative / UI
  cursor: (
    <>
      <path d="M6.4 3.6 17 12.4l-4.6.6 2.6 5.4-2.4 1.2-2.6-5.4-3.2 3.4z" {...S} />
      <path d="M19.6 6.6 22 5M19.4 10.2l2.8.4M17.4 3.4l.9-2.4" {...S} />
    </>
  ),
  bookmark: (
    <>
      <path d="M6.4 3.6h11.2v17l-5.6-4-5.6 4z" {...S} />
    </>
  )
}

export default function Icon({ name, size = 18, className = '', style }) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}
