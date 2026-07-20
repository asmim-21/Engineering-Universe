import { useEffect, useState } from 'react'
import { DEFAULT_UNIVERSE } from './data/content.js'

// Hash routing keeps the build a single static file set — no server rewrites
// needed, so it can be served from any static host.
//
// Routes:
//   #/                          homepage (default universe)
//   #/<universeId>              homepage for a universe (e.g. #/computer)
//   #/<universeId>/toolkit      that universe's toolkit, open over its home
//   #/topic/<topicId>           topic canvas (universe inferred from the topic)
//   #/topic/<topicId>/<popupId> topic canvas with a popup open
//   #/toolkit                   default universe's toolkit (back-compat)

const UNIVERSE_IDS = ['software', 'computer']

export function parseHash(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)

  if (parts[0] === 'topic' && parts[1]) {
    return { view: 'topic', universe: null, topicId: parts[1], popupId: parts[2] || null, toolkit: false }
  }
  if (parts[0] === 'toolkit') {
    return { view: 'home', universe: DEFAULT_UNIVERSE, topicId: null, popupId: null, toolkit: true }
  }
  if (UNIVERSE_IDS.includes(parts[0])) {
    return {
      view: 'home',
      universe: parts[0],
      topicId: null,
      popupId: null,
      toolkit: parts[1] === 'toolkit'
    }
  }
  return { view: 'home', universe: DEFAULT_UNIVERSE, topicId: null, popupId: null, toolkit: false }
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
