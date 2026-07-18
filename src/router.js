import { useEffect, useState } from 'react'

// Hash routing keeps the build a single static file set — no server rewrites
// needed, so it can be served from any static host.
//
// Routes:
//   #/                          homepage
//   #/topic/<topicId>           topic canvas
//   #/topic/<topicId>/<popupId> topic canvas with a popup open
//   #/toolkit                   the global toolkit sheet, open over any page

export function parseHash(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)

  if (parts[0] === 'topic' && parts[1]) {
    return { view: 'topic', topicId: parts[1], popupId: parts[2] || null, toolkit: false }
  }
  if (parts[0] === 'toolkit') {
    return { view: 'home', topicId: null, popupId: null, toolkit: true }
  }
  return { view: 'home', topicId: null, popupId: null, toolkit: false }
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

export function navigate(path) {
  window.location.hash = path
}
