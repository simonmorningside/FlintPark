import { Link } from 'react-router-dom';
import '../App.css';
import './mtolivearchive.css';

export default function HistoryOfChoir() {
  return (
    <div className="page-container">
      <header className="header">
        <h1>History of Choir</h1>
      </header>
      <section className="content-section">
        {/* Adding 30+ placeholder images */}
        {[...Array(50)].map((_, index) => (
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
