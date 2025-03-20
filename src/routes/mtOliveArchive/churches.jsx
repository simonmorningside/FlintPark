
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';
import Timeline from '../mtOliveArchive/timeline.jsx';

export default function Churches() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;
  const selectedImageIndices = [4, 41, 32, 41, 35, 36, 41, 7, 41, 41, 41, 40, 13, 17, 41, 9, 41, 5];

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
        <img
          src={media.images[2].url}
          alt="Church Logo"
          className="header-logo"
        />
      )}
    </div>
    <div className="title-video-container">
      <h1>History of Mount Olive Missionary Baptist Church</h1>
      <section className="founders-header-text">
        <div className="video-header">
          <video
            controls
            width="75%"
            height="20%"
            src={media.videos[0].url}
            alt="church video"
            className="church-video"
          />
        </div>
      </section>
    </div>
  </div>
</header>
      <section className="founders-header-text">
        <div className="video-header">
        <video controls width = "75%" height = "20%"
        src={media.videos[0].url}
        alt="church video"
        className="church-video"
        />
        </div>
      </section>

      <section className="history-section">
        <div className="history-text">
          <p>
            Mt Olive Began as what the Flint Journal called the “colored Baptist
            mission” which began meeting in 1907 at the home of Sarah Howard at
            507 9th Street on the Southside of Flint. The population of Flint
            was small, but the Southside neighborhood was already an emerging
            center of Black life. Mt Olive’s founders were recent emigrants
            from Ontario, Canada, the children of people who had fled slavery
            in the United States and developed Black settlements across the
            Detroit River. The only Black church in Flint was the AME church
            until Mt Olive’s founders brought their interest in organizing a
            Southside Baptist congregation to Rev. Clarence E. Lapp of the
            First Baptist Church of Flint (later known as Woodside and now the
            People’s Church). Together they would build a mission and then Mt
            Olive Missionary Baptist church. The spirit-filled people who began
            Mt. Olive lived and died here and are buried in our surrounding
            cemeteries. Their descendants continued their community-building
            work here and in American cities across the urban north.
          </p>
          <Link to="history/" className="learn-more-link">
            Learn More...
          </Link>
        </div>
      </section>

{/* Founders Section */}
      <section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">
            Founders
          </h2>
          </div>
          <div className="founders-images-div">
          <p className="founders-images">
          {media.images.length > 0 && (
            <img
              src={media.images[8].url}
              alt="Church Logo"
              className="founder-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[9].url}
              alt="Church Logo"
              className="founder-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[2].url}
              alt="Church Logo"
              className="founder-photo"
            />
          )}
          </p>
        </div>
      </section>

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
        <div>
          <Timeline />
        </div>
      </section>

{/* Buildings Section */}
      <section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">
            Buildings
          </h2>
          <p className="founders-images">
          </p>
        </div>
          <div className="founders-images-div">
          <p className="founders-images">
          {media.images.length > 0 && (
            <img
              src={media.images[4].url}
              alt="Church Logo"
              className="building-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[1].url}
              alt="Church Logo"
              className="building-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[3].url}
              alt="Church Logo"
              className="building-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[2].url}
              alt="Church Logo"
              className="building-photo"
            />
          )}
          </p>
        </div>
        <div>
          <p>Words</p>
        </div>
      </section>

{/* Parsonages Section */}
      <section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">
            Parsonages
          </h2>
          <p className="founders-images">
          </p>
        </div>
          <div className="founders-images-div">
          <p className="founders-images">
          {media.images.length > 0 && (
            <img
              src={media.images[5].url}
              alt="Church Logo"
              className="parsonage-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[6].url}
              alt="Church Logo"
              className="parsonage-photo"
            />
          )}
          {media.images.length > 0 && (
            <img
              src={media.images[7].url}
              alt="Church Logo"
              className="parsonage-photo"
            />
          )}
          </p>
        </div>
      </section>

      <section className="archive-section">
        <h2 className="archive-header">Mount Olive Archive</h2>
        <div className="archive-links">
          <p className="block-style">
          <Link to="/historyofpastors" className="archive-link-styling">
          Life Events
          </Link>
          <br></br>
          Funeral Programs
          <br></br>
          Obituaries
          <br></br>
          Graduations
          <br></br>
          </p>
          <p className="block-style">
          <Link to="/historyoflifeevents" className="archive-link-styling">
          Choir Records
          </Link>
          <br></br>
          Recordings
          <br></br>
          Meetings Minutes
          </p>
          <p className="block-style">
          <Link to="/historyofchoir" className="archive-link-styling">
          Church Materials
          </Link>
          <br></br>
          Bulletins
          <br></br>
          Newsletters (The Olive Branch)
          <br></br>
          Flyers
          <br></br>
          Anniversaries
          <br></br>
          Directories
          </p>
          <p className="block-style">
          <Link to="/churcheventsactivities" className="archive-link-styling">
          Photographs
          </Link>
          <br></br>
          Sunday School
          <br></br>
          Events
          <br></br>
          Summer Enrichment Program
          </p>
        </div>
      </section>
    </div>
  );
}
