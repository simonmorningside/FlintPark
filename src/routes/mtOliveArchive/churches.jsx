import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function Churches() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;
  const selectedImageIndices = [32, 35, 36, 7, 40, 13, 17, 9, 5];
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTextBox, setShowTextBox] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImage(index); // Store the clicked image index
    setShowTextBox(true); // Show the text box
  };

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
          src={media.images[10].url}
          alt="Church Logo"
          className="header-logo"
        />
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
<section className="section-container">
  <div className="section-header">
    <h2 className="header-text">FOUNDERS</h2>
  </div>
  <div className="section-content">
    <p className="founders-images">
      {media.images.length > 0 && (
        <img
          src={media.images[18].url}
          alt="Founder Photo"
          className="founder-photo"
        />
      )}
      {media.images.length > 0 && (
        <img
          src={media.images[0].url}
          alt="Founder Photo"
          className="founder-photo"
        />
      )}
    </p>
  </div>
</section>


{/* Pastors Section */}
<section className="section-container">
  <div className="section-header">
    <h2 className="header-text">PASTORS</h2>
  </div>
  <div className="section-content" style={{ display: 'flex', alignItems: 'center' }}>
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


{/* Buildings Section */}
<section className="section-container">
  <div className="section-header">
    <h2 className="header-text">BUILDINGS</h2>
  </div>
  <div className="section-content">
    <div className="founders-images-div">
      {media.images.length > 0 && (
        <img
          src={media.images[12].url}
          alt="Building Photo"
          className="building-photo"
        />
      )}
      {media.images.length > 0 && (
        <img
          src={media.images[3].url}
          alt="Building Photo"
          className="building-photo"
        />
      )}
      {media.images.length > 0 && (
        <img
          src={media.images[7].url}
          alt="Building Photo"
          className="building-photo"
        />
      )}
    </div>
  </div>
</section>


{/* Parsonages Section */}
<section className="section-container">
  <div className="section-header">
    <h2 className="header-text">PARSONAGES</h2>
  </div>
  <div className="section-content">
    <div className="founders-images-div">
      {media.images.length > 0 && (
        <img
          src={media.images[14].url}
          alt="Parsonage Photo"
          className="parsonage-photo"
        />
      )}
      {media.images.length > 0 && (
        <img
          src={media.images[15].url}
          alt="Parsonage Photo"
          className="parsonage-photo"
        />
      )}
      {media.images.length > 0 && (
        <img
          src={media.images[16].url}
          alt="Parsonage Photo"
          className="parsonage-photo"
        />
      )}
    </div>
  </div>
</section>


      <section className="section-container">
      <div className="section-header">
        <h2 className="header-text">
            ARCHIVE
          </h2>
        </div>
          <div className="archive-links">
          <p className="block-style">
          <Link to={'archive/'}className="archive-link-styling">
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
          <Link to={'archive/'}className="archive-link-styling">
          Choir Records
          </Link>
          <br></br>
          Recordings
          <br></br>
          Meetings Minutes
          </p>
          <p className="block-style">
          <Link to={'archive/'}className="archive-link-styling">
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
          <Link to={'archive/'}className="archive-link-styling">
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
