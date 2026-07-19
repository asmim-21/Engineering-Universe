import { navigate } from '../router.js'
import Icon from './Icon.jsx'
import logo from '../logo.png'

export default function TopBar() {
  return (
    <div className="top-bar">
      <button className="brand" onClick={() => navigate('/')}>
        <img className="brand-logo" src={logo} alt="" />
        <span className="brand-name">Software Engineering Universe</span>
      </button>
      <span className="spacer" />
      <button className="btn btn-kit" onClick={() => navigate('/toolkit')}>
        <Icon name="toolbox" /> Toolkit
      </button>
      <button className="btn" onClick={() => navigate('/')}>
        <Icon name="map" /> Map
      </button>
    </div>
  )
}
