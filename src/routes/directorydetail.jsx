import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import '../index.css';

const DirectoryDetail = () => {
  const { directory } = useParams(); // Get the directory from the URL
  const [subdirectories, setSubdirectories] = useState([]);
  const [images, setImages] = useState([]);
  const [textFiles, setTextFiles] = useState([]); // Store text files content
  const [loading, setLoading] = useState(true);

  // Fetch subdirectories, images, and text files for the specific directory
  useEffect(() => {
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}`)
      .then((response) => response.json())
      .then((data) => {
        setSubdirectories(data.subdirectories);
        setImages(data.images);
        setTextFiles(data.text_files); // Populate text files from API
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
    <div style={{ marginTop: "60px" }}>
      <div className="border-box">
      <h2>{directory}</h2>

      {/* Display text files */}
      {textFiles.length > 0 && (
      <div>
          {textFiles.map((file, index) => (
        <div key={index}>
        <p>{file.content}</p> {/* Displaying content as normal text */}
        </div>
        ))}
      </div>
    )}
      </div>
      {/* Display subdirectories as links */}
      {subdirectories.length > 0 && (
        <div>
          <h3>Streets</h3>
          <div className="streets-grid">
            {subdirectories.map((subdir, index) => (
              <Link key={index} to={`/directory/${directory}/${subdir}`} className="street-button">
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
{/* Display text files */}
        </div>
  );
};

export default DirectoryDetail;