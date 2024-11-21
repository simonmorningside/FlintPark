import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DirectoryDetail = () => {
  const { directory } = useParams();  // Get the directory from the URL
  const [subdirectories, setSubdirectories] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subdirectories and images for the specific directory
  useEffect(() => {
    console.log("Fetching data for directory:", directory);
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubdirectories(data.subdirectories);
        setImages(data.images);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [directory]);

  if (loading) {
    return <div>Loading content...</div>;
  }

  return (
    <div>
      <h2>Directory: {directory}</h2>

      {/* Display subdirectories as clickable links */}
      {subdirectories.length > 0 && (
        <div>
          <h3>Subdirectories</h3>
          <ul>
            {subdirectories.map((subdir, index) => (
              <li key={index}>
                <Link to={`/directory/${directory}/${subdir}`}>{subdir}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display images */}
      {images.length > 0 && (
        <div>
          <h3>Images</h3>
          <div>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectoryDetail;
