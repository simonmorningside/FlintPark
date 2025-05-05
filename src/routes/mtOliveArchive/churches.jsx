import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../mtOliveArchive/mtOliveArchive.css';

export default function Churches() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;
  const selectedImageIndices = [32, 35, 36, 7, 40, 13, 17, 9, 5];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
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

  useEffect(() => {
    const fetchPastors = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pastors');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Pastors Data:', data);
        setPastors({ images: selectedImageIndices.map(index => data.images[index]).filter(Boolean) });
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPastors();
  }, []);

  const handleNext = () => {
    if (startIndex + imagesPerPage < pastors.images.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - imagesPerPage >= 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container" style={{ marginTop: '60px' }}>
      <header className="header">
        <div className="header-content">
          <div className="header-logo-container">
            {media.images.length > 0 && (
              <img src={media.images[10].url} alt="Church Logo" className="header-logo" />
            )}
          </div>
          <div className="title-video-container">
            <h1>History of Mount Olive Missionary Baptist Church</h1>
            <section className="header-text">
              <div className="video-header">
                <video controls src={media.videos[0].url} className="church-video" />
              </div>
            </section>
          </div>
        </div>
        <div className="green-strip"></div>
      </header>

      <section className="history-section">
        <div className="history-text">
          <p>
            Mt Olive Began as what the Flint Journal called the “colored Baptist mission” which began meeting in 1907...
          </p>
          <Link to="history/" className="learn-more-link">Learn More...</Link>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="header-text">FOUNDERS</h2>
        </div>
        <div className="section-content">
          {media.images.length > 0 && media.images.slice(0, 2).map((image, index) => (
            <img key={index} src={image.url} alt="Founder" className="founder-photo" />
          ))}
        </div>
      </section>

      {/* Pastors Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="header-text">PASTORS</h2>
        </div>
        <div className="section-content" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={handlePrev} disabled={startIndex === 0}><ChevronLeft size={24} /></button>
          <div className="founders-images" style={{ display: 'flex', gap: '10px' }}>
            {pastors.images.slice(startIndex, startIndex + imagesPerPage).map((image, index) => (
              <img key={index} src={image.url} alt="Pastor" className="pastor-photo" />
            ))}
          </div>
          <button onClick={handleNext} disabled={startIndex + imagesPerPage >= pastors.images.length}><ChevronRight size={24} /></button>
        </div>
      </section>
    </div>
  );
}
