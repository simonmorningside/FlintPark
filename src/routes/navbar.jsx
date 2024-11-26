import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import whiteLogo from '../assets/Asset_WHITE.svg'
import whiteLogoInteractive from '../assets/Asset_WHITE_Interactive.svg'
import '../App.css'
 

export default function Navbar() {
    const [onHover, setonHover] = useState(false);
    return (
    <>
       <nav className="top-nav">
        <div className="logo-container">
      {onHover ? (
            <img
              src={whiteLogo}
              className="logo"
              alt="White logo Alt"
              onMouseLeave={() => setonHover(false)}
            />
          ) : (
            <img
              src={whiteLogo}
              className="logo"
              alt="White logo"
              onMouseEnter={() => setonHover(true)}
            />
          )}
        </div>
        <ul className="nav-links">
          <li><Link to={`/home/`}>Home</Link></li>
          <li><Link to={`/about/`}>About</Link></li>
          <li><Link to={`/streets/`}>Streets</Link></li>
          <li><Link to={`/churches/`}>Churches</Link></li>
          <li><Link to={`/people/`}>People of Flint</Link></li>
          <li><Link to={`/team/`}>Meet the Team</Link></li>
        </ul>
      </nav>
        <div id="detail">
            <Outlet />
        </div>
    </>
    )
}