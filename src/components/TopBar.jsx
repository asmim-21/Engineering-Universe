import { navigate } from '../router.js'
import Icon from './Icon.jsx'
import logo from '../logo.png'

export default function TopBar({ universe }) {
  return (
    <div className="top-bar">
      <button className="brand" onClick={() => navigate(`/${universe.id}`)}>
        <img className="brand-logo" src={logo} alt="" />
        <span className="brand-name">Engineering Universe</span>
      </button>
      <span className="brand-context">{universe.name}</span>
      <span className="spacer" />
      <button className="btn btn-kit" onClick={() => navigate(`/${universe.id}/toolkit`)}>
        <Icon name="toolbox" /> Toolkit
      </button>
      <button className="btn" onClick={() => navigate(`/${universe.id}`)}>
        <Icon name="map" /> Map
      </button>
    </div>
  )
}
