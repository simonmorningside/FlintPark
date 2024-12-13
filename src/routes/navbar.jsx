import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import whiteLogo from '../assets/Asset_WHITE.svg';
import whiteLogoInteractive from '../assets/Asset_WHITE_Interactive.svg';
import '../App.css';
import '../index.css';

export default function Navbar() {
  const [onHover, setOnHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="top-nav">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/home">
          {onHover ? (
            <img
              src={whiteLogoInteractive}
              className="logo"
              alt="White logo Alt"
              onMouseLeave={() => setOnHover(false)}
            />
          ) : (
            <img
              src={whiteLogo}
              className="logo"
              alt="White logo"
              onMouseEnter={() => setOnHover(true)}
            />
          )}
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'rotate-bar1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide-bar' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate-bar2' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to={`/home/`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/about/`} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={`/streets/`} onClick={() => setMenuOpen(false)}>
              Neighborhoods
            </Link>
          </li>
          <li>
            <Link to={`/churches/`} onClick={() => setMenuOpen(false)}>
              Churches
            </Link>
          </li>
          <li>
            <Link to={`/people/`} onClick={() => setMenuOpen(false)}>
              People of Flint
            </Link>
          </li>
          <li>
            <Link to={`/team/`} onClick={() => setMenuOpen(false)}>
              Meet the Team
            </Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
