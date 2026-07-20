import { useEffect } from 'react'
import { topicById, allPopups, universeById, DEFAULT_UNIVERSE } from './data/content.js'
import { useRoute, navigate } from './router.js'
import TopBar from './components/TopBar.jsx'
import Home from './components/Home.jsx'
import TopicCanvas from './components/TopicCanvas.jsx'
import Popup from './components/Popup.jsx'
import Toolkit from './components/Toolkit.jsx'

export default function App() {
  const route = useRoute()
  const topic = route.topicId ? topicById[route.topicId] : null
  const popup = route.popupId ? allPopups[route.popupId] : null

  // The active universe is the one the topic belongs to, or the one named in the
  // URL for the homepage/toolkit, falling back to the default.
  const activeUniverseId = topic ? topic.universe : route.universe || DEFAULT_UNIVERSE
  const universe = universeById[activeUniverseId] ?? universeById[DEFAULT_UNIVERSE]

  // An unknown topic in the URL should not leave the page blank.
  useEffect(() => {
    if (route.view === 'topic' && !topic) navigate('/')
  }, [route.view, topic])

  useEffect(() => {
    document.title = popup
      ? `${popup.title} — Engineering Universe`
      : topic
        ? `${topic.title} — Engineering Universe`
        : 'Engineering Universe'
  }, [topic, popup])

  const closeOverlay = () => navigate(topic ? `/topic/${topic.id}` : `/${activeUniverseId}`)

  return (
    <div className="app">
      <TopBar universe={universe} />

      {topic ? <TopicCanvas topic={topic} /> : <Home universe={universe} />}

      {popup && <Popup popup={popup} siblings={topic?.popups} onClose={closeOverlay} />}
      {route.toolkit && <Toolkit universe={universe} onClose={closeOverlay} />}
    </div>
  )
}
