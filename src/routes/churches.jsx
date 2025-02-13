
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../fillerstylepageuntilwearesorted.css';

export default function Churches() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });

  useEffect(() => {
    // Fetch media data from the API
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches'); // Update to the correct API URL if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Media Data:', data); // Log the fetched data to the console
        setMedia(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container" style={{ marginTop: '60px' }}>
      <header className="header">
        <div className="header-content">
          {media.images.length > 0 && (
            <img
              src={media.images[0].url}
              alt="Church Logo"
              className="header-logo"
            />
          )}
          <h1>History of Mount Olive Missionary Baptist Church</h1>
        </div>
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
          <Link to="/churchesabout" className="learn-more-link">
            Learn More...
          </Link>
        </div>
      </section>


      <section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">
            Founders
          </h2>
          </div>
          <div className="founders-images-div">
          <p className="founders-images">
          <img
          src="unknown"
          alt="Placeholder for image 1"
          className="founders-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 2"
          className="founders-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 3"
          className="founders-image"
          />
          </p>
        </div>
      </section>

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
          <img
          src="unknown"
          alt="Placeholder for image 1"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 2"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 3"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 4"
          className="pastors-image"
          />
          </p>
        </div>
      </section>

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
          <img
          src="unknown"
          alt="Placeholder for image 1"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 2"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 3"
          className="pastors-image"
          />
          <img
          src="unknown"
          alt="Placeholder for image 4"
          className="pastors-image"
          />
          </p>
        </div>
      </section>

      <section className="archive-section">
        <h2 className="archive-header">Mount Olive Archive</h2>
        <div className="archive-links">
          <Link to="/historyofpastors" className="archive-link">
            History of Pastors
          </Link>
          <Link to="/historyoflifeevents" className="archive-link">
            History of Life Events
          </Link>
          <Link to="/historyofchoir" className="archive-link">
            History of Choir
          </Link>
          <Link to="/churcheventsactivities" className="archive-link">
            Church Events & Activities
          </Link>
        </div>
      </section>
    </div>
  );
}
