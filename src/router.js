import { useEffect, useState } from 'react'

// Hash routing keeps the build a single static file set — no server rewrites
// needed, which is what GitLab Pages gives us.
//
// Routes:
//   #/                          homepage
//   #/topic/<topicId>           topic canvas
//   #/topic/<topicId>/<popupId> topic canvas with a popup open
//   #/toolkit/<popupId>         homepage with a global toolkit popup open

export function parseHash(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)

  if (parts[0] === 'topic' && parts[1]) {
    return { view: 'topic', topicId: parts[1], popupId: parts[2] || null }
  }
  if (parts[0] === 'toolkit' && parts[1]) {
    return { view: 'home', topicId: null, popupId: parts[1] }
  }
  return { view: 'home', topicId: null, popupId: null }
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
