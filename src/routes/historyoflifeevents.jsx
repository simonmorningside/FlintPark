import { Link } from 'react-router-dom';
import '../App.css';
import './mtolivearchive.css';

export default function HistoryOfLifeEvents() {
  return (
    <div className="page-container">
      <header className="header">
        <h1>History of Life Events</h1>
      </header>
      
      <section className="links-section">
        <Link to="/obituaries" className="event-link">Obituaries</Link>
        <Link to="/graduations" className="event-link">Graduations</Link>
        <Link to="/birthdays" className="event-link">Birthdays</Link>
      </section>

      <section className="content-section">
        {/* Adding 30+ placeholder images */}
        {[...Array(70)].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
            alt={`Placeholder ${index + 1}`}
            className="placeholder-image"
          />
        ))}
      </section>
      
      <footer>
        <Link to="/" className="history-link">Back to Home</Link>
      </footer>
    </div>
  );
}
