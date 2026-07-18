import { useEffect } from 'react'
import { topicById, allPopups } from './data/content.js'
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

  // An unknown topic in the URL should not leave the page blank.
  useEffect(() => {
    if (route.view === 'topic' && !topic) navigate('/')
  }, [route.view, topic])

  useEffect(() => {
    document.title = popup
      ? `${popup.title} — Software Engineering Universe`
      : topic
        ? `${topic.title} — Software Engineering Universe`
        : 'Software Engineering Universe'
  }, [topic, popup])

  const closeOverlay = () => navigate(topic ? `/topic/${topic.id}` : '/')

  return (
    <div className="app">
      <TopBar />

      {topic ? <TopicCanvas topic={topic} /> : <Home />}

      {popup && <Popup popup={popup} siblings={topic?.popups} onClose={closeOverlay} />}
      {route.toolkit && <Toolkit onClose={closeOverlay} />}
    </div>
  )
}
