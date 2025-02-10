import { useState, useEffect } from 'react';
import '../../App.css';
import '../../index.css';

export default function Home() {
  const [maps, setMaps] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState(null); // State for the featured video
  const [loading, setLoading] = useState(true);

  // Fetch maps
  useEffect(() => {
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/maps")
      .then((response) => response.json())
      .then((data) => {
        setMaps(data.maps); // Set directories data
      })
      .catch((error) => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  // Fetch the featured video
  useEffect(() => {
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedVideo(data.movies[3]); // Set the featured video (index 3 from Video page)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ marginTop: "60px" }} className="home-page">
      {/* Left Section for Text and Heading */}
      <div>
      <div className="content">
        <h1 className="textAlignLeft">Flint Neighborhood<br/>Oral History Project</h1>
        <p className="textAlignLeft">
          The Flint Neighborhood Oral History Project is an urban memory project that documents 
          and interprets resident’s artifacts and stories of Flint Michigan's original Black 
          neighborhoods. These neighborhoods, segregated by federal redlining policies, and 
          restrictive housing covenants, and destroyed by urban renewal projects, now survive 
          in the cultural networks that connect displaced residents.
          <br></br><br></br>
          Watch the intro video below to learn more!
        </p>
      </div>

      <div className="featured-video align-left">
  {!loading && featuredVideo ? (
    <div>
      <video controls width="600" preload="metadata">
        <source src={featuredVideo.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div>Loading featured video...</div>
  )}
  </div>
  </div>
      {/* Right Section for Map */}
      <div className="front-map">
        <img
          src={maps[2]?.url}
          alt="Placeholder for map"
          className="front-column-image"
        />
      </div>

    </div>
  );
}