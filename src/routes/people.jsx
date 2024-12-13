import React, { useState, useEffect } from "react";

const People = () => {
  const [videos, setVideos] = useState([]);   // State to store video data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Fetch data from the backend
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.movies); // Assume 'movies' array contains video data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading videos...</div>; // Loading indicator
  }

  return (
    <div className="people-container" style={{ marginTop: "60px" }}>
      {/* Render the first video separately */}
      {videos.length > 0 && (
        <div className="people-video">
          <video controls width="600" preload="metadata">
            <source src={videos[3].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="featured-video-label">{videos[3].name}</div> {/* Display video name */}
        </div>
      )}
  
      {/* Render the rest of the videos */}
      <div className="other-videos">
        {videos.map((video, index) => {
          if ([0, 1, 2, 4, 5, 6, 7, 8].includes(index)) {
            return (
          <div key={index} className="people-video">
            <video controls width="300" preload="metadata">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="people-video-label">{video.name}</div> {/* Display video name */}
          </div>
        );
} return null; 
})}
      </div>
    </div>
  );
};

export default People;