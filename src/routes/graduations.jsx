import React, { useEffect, useState } from 'react';
import './mtolivearchive.css';

const Graduations = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch signed URLs for graduation-related PDFs
    fetch("http://localhost:3000/api.graduations-pdfs") // Update with your API endpoint
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
    <div className="graduations">
      <h1>Graduations</h1>
      {loading ? (
        <p>Loading PDFs...</p>
      ) : (
        <div className="pdf-grid">
          {pdfs.length > 0 ? (
            pdfs.map((pdf, index) => (
              <a key={index} href={pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
                Graduation {index + 1}
              </a>
            ))
          ) : (
            <p>No PDFs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Graduations;
