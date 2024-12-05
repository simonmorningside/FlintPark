import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DirectoryDetail = () => {
  const { directory } = useParams();  // Get the directory from the URL
  const [subdirectories, setSubdirectories] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subdirectories and images for the specific directory
  useEffect(() => {
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}`)
      .then((response) => response.json())
      .then((data) => {
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
    <div style={{ marginTop: "60px" }}> {/* Adjust the value to match the navbar height */}
      <h2>Directory: {directory}</h2>
  
      {/* Display subdirectories as buttons */}
      {subdirectories.length > 0 && (
        <div>
          <h3>Subdirectories</h3>
          <div className="streets-grid">
            {subdirectories.map((subdir, index) => (
              <Link 
                key={index} 
                to={`/directory/${directory}/${subdir}`} 
                className="street-button"
              >
                {subdir}
              </Link>
            ))}
          </div>
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
