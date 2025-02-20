
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function Pastors() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;
  const selectedImageIndices = [4, 32, 10, 20, 7, 13, 17, 9, 5, 8, 9];

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
    <>
{/* Pastors Section */}

<section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">Pastors</h2>
        </div>
        <div className="founders-images-div" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={handlePrev} disabled={startIndex === 0} style={{ marginRight: '10px' }}>
            <ChevronLeft size={24} />
          </button>
          <div className="founders-images" style={{ display: 'flex', gap: '10px' }}>
            {pastors.images.slice(startIndex, startIndex + imagesPerPage).map((image, index) => (
              <img key={index} src={image.url} alt="Pastor" className="pastor-photo" />
            ))}
          </div>
          <button onClick={handleNext} disabled={startIndex + imagesPerPage >= pastors.images.length} style={{ marginLeft: '10px' }}>
            <ChevronRight size={24} />
          </button>
          </div>
        </section>
      </>
  );
}
