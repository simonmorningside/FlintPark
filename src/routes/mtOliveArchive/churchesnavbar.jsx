import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/index.css';
import '../mtOliveArchive/mtOliveArchive.css';

export default function Churchesnavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [loading, setLoading] = useState(true);
  
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches');
        if (!response.ok) throw new Error('Failed to fetch media data');
        
        const data = await response.json();
        console.log('Fetched Media Data:', data);
        setMedia(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  return (
    <>
      <nav className="church-top-nav">
        {/* Logo Section */}
        <div>
          <Link to="/churches">
            <h1 className="navbartext">History of Mount Olive Missionary Baptist Church</h1>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'rotate-bar1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide-bar' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate-bar2' : ''}`}></div>
        </div>

        {/* Navigation Links (only appear when menuOpen is true) */}
        <ul className={`church-nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to={`/churches/`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`history/`} onClick={() => setMenuOpen(false)}>
              History
            </Link>
          </li>
          <li>
            <Link to={`pastors/`} onClick={() => setMenuOpen(false)}>
              Pastors
            </Link>
          </li>
          <li>
            <Link to={`archive/`} onClick={() => setMenuOpen(false)}>
              Archive
            </Link>
          </li>
          <li>
            <Link to={`about/`} onClick={() => setMenuOpen(false)}>
              About
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
