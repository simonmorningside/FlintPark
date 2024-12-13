import React, { useEffect, useState } from 'react';
import './mtolivearchive.css';

const Obituaries = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the signed URLs for PDFs
    fetch("http://localhost:3000/api.obituaries-pdfs") // Update with your API endpoint
      .then(response => response.json())
      .then(data => {
        setPdfs(data.pdfs || []); // Set the fetched signed URLs
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching PDF links:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="obituaries">
      <h1>Obituaries</h1>
      {loading ? (
        <p>Loading PDFs...</p>
      ) : (
        <div className="pdf-grid">
          {pdfs.length > 0 ? (
            pdfs.map((pdf, index) => (
              <a key={index} href={pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
                Obituary {index + 1}
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

export default Obituaries;
