import { Link } from 'react-router-dom';
import '../../App.css';
import './mtOliveArchive.css';

export default function HistoryOfLifeEvents() {
  return (
    <div className="page-container">
      <header className="header">
        <h1>History of Life Events</h1>
      </header>

      <section className="links-section">
        <Link to={'/obituaries/'} className="event-link">Obituaries</Link>
        <Link to={'/graduations/'} className="event-link">Graduations</Link>
        <Link to={'/birthdays/'} className="event-link">Birthdays</Link>
      </section>

      <footer>
        <Link to="/" className="history-link">Back to Home</Link>
      </footer>
    </div>
  );
}
