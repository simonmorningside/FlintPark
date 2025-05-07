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
  const [selectedFounderIndex, setSelectedFounderIndex] = useState(null);
  const [selectedBuildingIndex, setSelectedBuildingIndex] = useState(null);
  const [selectedParsonageIndex, setSelectedParsonageIndex] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches');
        if (!response.ok) throw new Error('Failed to fetch media data');
        const data = await response.json();
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
        if (!response.ok) throw new Error('Failed to fetch media data');
        const data = await response.json();
        setPastors({ images: selectedImageIndices.map(index => data.images[index]).filter(Boolean) });
      } catch (error) {
        console.error('Error fetching media:', error);
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

  if (loading) return <div>Loading...</div>;

  const founderInfo = [
    { title: "Sarah Howard", description: "Founder and early host of Mt. Olive's gatherings." },
    { title: "Rev. Clarence E. Lapp", description: "Provided spiritual support and formalized the church's name." }
  ];

  const buildingInfo = [
    { title: "Original Church", description: "Constructed in 1910 with the help of the local community." },
    { title: "Second Sanctuary", description: "Built after expansion in 1945 with updated brickwork." },
    { title: "Modern Structure", description: "Current location, renovated in 1998 to include more space." }
  ];

  const parsonageInfo = [
    { title: "Early Parsonage", description: "Used by the first pastor and his family in the 1920s." },
    { title: "Mid-century Home", description: "Provided housing for pastors during the 1950s–70s." },
    { title: "Modern Parsonage", description: "Still in use today, renovated in 2015." }
  ];

  const pastorNameTags = [
    { name: "Rev. D.L. Jackson", id: "jackson" },
    { name: "Rev. D.C. Adams", id: "adams" },
    { name: "Rev. H.L. Dungy", id: "dungy" },
    { name: "Rev. A. Bolen", id: "bolen" },
    { name: "Rev. J.C. Nicholas", id: "nicholas" },
    { name: "Rev. W.H. McKinney", id: "mckinney" },
    { name: "Rev. R.R. Turpin", id: "turpin" },
    { name: "Rev. R.I. Greer Jr.", id: "greer" },
    { name: "Rev. M. Stewart", id: "stewart" }
  ];

  return (
    <div className="page-container" style={{ marginTop: '60px', padding: 0 }}>
      <header className="header">
        <div className="header-content">
          <div className="header-logo-container">
            {media.images[10] && <img src={media.images[10].url} alt="Church Logo" className="header-logo" />}
          </div>
          <div className="title-video-container">
            <h1>History of Mount Olive Missionary Baptist Church</h1>
            <section className="header-text">
              <div className="video-header">
                <video controls src={media.videos[0]?.url} className="church-video" />
              </div>
            </section>
          </div>
        </div>
        <div className="green-strip"></div>
      </header>

      <section className="history-section">
        <div className="history-text">
          <p>
            Mount Olive Missionary Baptist Church was founded in 1907 by a determined group of families committed to faith and fellowship in Flint’s Southside. These founders, many of whom were descendants of freedom seekers from Canada, began meeting at the home of Sarah Howard and quickly grew into a thriving congregation. With the support of Rev. Clarence E. Lapp of First Baptist Church, the mission formally became Mt. Olive and laid roots that continue to grow through generations. Their vision and legacy remain central to the life of the church today.
          </p>
          <Link to="history/" className="learn-more-link">Learn More...</Link>
        </div>
      </section>

      {['FOUNDERS', 'PASTORS', 'BUILDINGS', 'PARSONAGES', 'ARCHIVE'].map((title, idx) => (
        <section key={title} className={`section-container ${idx % 2 === 0 ? 'bg-ivory' : 'bg-light'}`}>
          <div className="section-inner">
            <h2 className="section-title">{title}</h2>

            {title === 'FOUNDERS' && (
              <div className="founders-info-container">
                <div className="founders-content-row">
                  <div className="founders-images">
                    {[18, 0].map((idx, i) => (
                      media.images[idx] && (
                        <div className="founder-box" key={i}>
                          <img
                            src={media.images[idx].url}
                            alt={`Founder ${i + 1}`}
                            className="founder-photo"
                            onClick={() => setSelectedFounderIndex(i)}
                          />
                          <div className="founder-name-tag">{founderInfo[i].title}</div>
                        </div>
                      )
                    ))}
                  </div>

                  <div className="founder-popup-box">
                    {selectedFounderIndex === null ? (
                      <p className="founder-placeholder">Click on a founder to learn more!</p>
                    ) : (
                      <div>
                          <h4>{founderInfo[selectedFounderIndex].title}</h4>
                          <p>{founderInfo[selectedFounderIndex].description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {title === 'PASTORS' && (
              <div className="pastors-slideshow-wrapper">
                <button onClick={handlePrev} disabled={startIndex === 0} className="arrow-button left-arrow">
                  <ChevronLeft />
                </button>

                <div className="founders-images" style={{ display: 'flex', gap: '10px' }}>
                  {pastors.images.slice(startIndex, startIndex + imagesPerPage).map((image, i) => {
                    const globalIndex = startIndex + i;
                    const tag = pastorNameTags[globalIndex];
                    return (
                      <div key={i} className="founder-box">
                        <img src={image.url} alt="Pastor" className="pastor-photo" />
                        {tag ? (
                          <Link to={`/churches/pastors#${tag.id}`} className="founder-name-tag">
                            {tag.name}
                          </Link>
                        ) : (
                          <div className="founder-name-tag">Pastor</div> // fallback
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  disabled={startIndex + imagesPerPage >= pastors.images.length}
                  className="arrow-button right-arrow"
                >
                  <ChevronRight />
                </button>
              </div>
            )}

            {title === 'BUILDINGS' && (
              <div className="building-info-container">
                <div className="image-row">
                  {[12, 3, 7].map((idx, i) => (
                    media.images[idx] && (
                      <div className="image-box" key={i} onClick={() => setSelectedBuildingIndex(i)}>
                        <img src={media.images[idx].url} alt={`Building ${i + 1}`} className="building-photo-custom" />
                        <div className="image-name-tag">{buildingInfo[i].title}</div>
                      </div>
                    )
                  ))}
                </div>
                <div className="info-popup-box centered-popup">
                  {selectedBuildingIndex === null ? (
                    <p className="info-placeholder">Click on a building to see more details.</p>
                  ) : (
                    <div>
                        <h4>{buildingInfo[selectedBuildingIndex].title}</h4>
                        <p>{buildingInfo[selectedBuildingIndex].description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {title === 'PARSONAGES' && (
              <div className="parsonage-info-container">
                <div className="image-row">
                  {[14, 15, 16].map((idx, i) => (
                    media.images[idx] && (
                      <div className="image-box" key={i} onClick={() => setSelectedParsonageIndex(i)}>
                        <img src={media.images[idx].url} alt={`Parsonage ${i + 1}`} className="parsonage-photo-custom" />
                        <div className="image-name-tag">{parsonageInfo[i].title}</div>
                      </div>
                    )
                  ))}
                </div>
                <div className="info-popup-box centered-popup">
                  {selectedParsonageIndex === null ? (
                    <p className="info-placeholder">Click on a parsonage to learn about its history.</p>
                  ) : (
                    <div>
                        <h4>{parsonageInfo[selectedParsonageIndex].title}</h4>
                        <p>{parsonageInfo[selectedParsonageIndex].description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {title === 'ARCHIVE' && (
              <div className="archive-links">
                {[
                  ["Life Events", "Funeral Programs", "Obituaries", "Graduations"],
                  ["Choir Records", "Recordings", "Meetings Minutes"],
                  ["Church Materials", "Bulletins", "Newsletters (The Olive Branch)", "Flyers", "Anniversaries", "Directories"],
                  ["Photographs", "Sunday School", "Events", "Summer Enrichment Program"]
                ].map((group, i) => (
                  <p key={i} className="block-style">
                    <Link to={'archive/'} className="archive-link-styling">{group[0]}</Link><br />
                    {group.slice(1).map((item, j) => <>{item}<br key={j} /></>)}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
