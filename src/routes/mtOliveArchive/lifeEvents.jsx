
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function LifeEvents() {
  const [loading, setLoading] = useState(true);
  const [pdfs, setpdfs] = useState({ jpeg: [], pdf: [] });


  useEffect(() => {
    // Replace with your actual API URL
    const fetchPdfs = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pdf');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Media Data:', data);
        setpdfs(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
{/* Pastors Section */}

<section className="founders-section">
          <h2 className="founders-header-text">Rev. Wade Hampton McKinney</h2>
          <div>
            <iframe src={pdfs.pdf[0].url} title="Rev. Wade Hampton McKinney" className = "pdf-iframe"></iframe>
            <img src={pdfs.jpeg[1].url} alt="Rev. Wade Hampton McKinney" className = "pdf-image"></img>
          </div>
        </section>
      </>
  );
}
