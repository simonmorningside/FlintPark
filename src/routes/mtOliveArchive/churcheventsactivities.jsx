import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './mtolivearchive.css';

export default function ChurchEventsActivities() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch signed URLs for church event-related PDFs
    fetch("http://localhost:3000/api.church-events-activities-pdfs") // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => {
        setPdfs(data.pdfs || []); // Save the fetched signed URLs
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching PDF links:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <header className="header">
        <h1>Church Events & Activities</h1>
      </header>
      <section className="content-section">
        {loading ? (
          <p>Loading PDFs...</p>
        ) : (
          <div className="pdf-grid">
            {pdfs.length > 0 ? (
              pdfs.map((pdf, index) => (
                <a
                  key={index}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                >
                  Event PDF {index + 1}
                </a>
              ))
            ) : (
              <p>No PDFs available.</p>
            )}
          </div>
        )}
      </section>
      <footer>
        <Link to="/" className="history-link">Back to Home</Link>
      </footer>
    </div>
  );
}
