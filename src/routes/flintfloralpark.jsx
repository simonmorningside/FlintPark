import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FlintPark = () => {
  const [directories, setDirectories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading directories...</div>;
  }

  return (
    <div>
      <h2>Top-level Directories</h2>
      <ul>
        {directories.map((directory, index) => (
          <li key={index}>
            {/* Link to the subdirectories and images in that directory */}
            <Link to={`/directory/${directory}`}>{directory}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlintPark;
