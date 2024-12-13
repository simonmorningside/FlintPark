import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Churches() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="page-container" style={{ marginTop: "60px" }}>
      <header className="header">
        <div className="header-content">
          <img
            src="https://storage.googleapis.com/flint-floral-park/Churches/OliveLogo.png"
            alt="Church Logo"
            className="header-logo"
          />
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
        <div className="history-video">
          <video controls className="video-placeholder">
            <source src="https://via.placeholder.com/300" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
