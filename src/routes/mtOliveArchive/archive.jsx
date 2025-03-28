import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState({ jpeg: [], pdf: [] });
  const [choirPdfs, setChoirPdfs] = useState([]);
  const [churchEventPdfs, setChurchEventPdfs] = useState([]);  // New state for church events PDFs
  const [error, setError] = useState(null);

  // Fetch PDFs, Choir data, and Church Events data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pdfResponse, choirResponse, churchEventResponse] = await Promise.all([
          fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pdf'),
          fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/choir'),
          fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/church_events') // New API call
        ]);

        // Check for errors in responses
        if (!pdfResponse.ok || !choirResponse.ok || !churchEventResponse.ok) {
          throw new Error('One or more API calls failed');
        }

        // Parse both responses
        const pdfData = await pdfResponse.json();
        const choirData = await choirResponse.json();
        const churchEventData = await churchEventResponse.json(); // New data from church events

        // Combine the PDF and JPEG data
        setPdfs(pdfData);
        setChoirPdfs(choirData.pdf); // Assuming choir data is under `pdf`
        setChurchEventPdfs(churchEventData.pdfs); // Store church event PDFs

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* Render PDF and JPEG from Life directory */}
      <section className="archive-container">
        <div className="archive-list">
        <h2>Life PDFs</h2>
        {pdfs.pdf.length > 0 ? (
          <ul>
            {pdfs.pdf.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Life PDFs available</p>
        )}
        </div>
        <div className="archive-list">
        {/* Render Choir PDFs */}
        <h2>Choir PDFs</h2>
        {choirPdfs.length > 0 ? (
          <ul>
            {choirPdfs.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Choir PDFs available</p>
        )}
        </div>
        {/* Render Church Events PDFs */}
        <div className="archive-list">
        <h2>Church Events PDFs</h2>
        {churchEventPdfs.length > 0 ? (
          <ul>
            {churchEventPdfs.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Church Events PDFs available</p>
        )}
        </div>
      </section>
    </>
  );
}
