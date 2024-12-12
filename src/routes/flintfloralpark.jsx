import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

const FlintPark = () => {
  const [directories, setDirectories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maps, setMaps] = useState([]);

  // Fetch the list of top-level directories from the backend
  useEffect(() => {
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/directory")
      .then((response) => response.json())
      .then((data) => {
        setDirectories(data.directories);  // Set directories data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/maps")
      .then((response) => response.json())
      .then((data) => {
        setMaps(data.maps);  // Set directories data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading directories...</div>;
  }

  return (
    <div className="flint-park-container">
      <div className="column">
        {directories[1] && (
          <>
            <h2>
              <Link to={`/directory/${directories[1]}`} className="column-link">
              South Side Neighborhood
              </Link>
            </h2>
            <p>Explore the details of the {directories[1]} directory.</p>
            <img
              src={maps[0]?.url}
              alt={`Placeholder for ${directories[1]}`}
              className="column-image"
            />
          </>
        )}
      </div>
      <div className="column">
        {directories[2] && (
          <>
            <h2>
              <Link to={`/directory/${directories[2]}`} className="column-link">
                St Johns Neighborhood
              </Link>
            </h2>
            <p>Discover the content of the {directories[2]} directory.</p>
            <img
              src={maps[1]?.url}
              alt={`Placeholder for ${directories[2]}`}
              className="column-image"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FlintPark;