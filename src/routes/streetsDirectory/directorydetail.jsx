import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../../styles/index.css'; // Global styles
import '../../styles/streets-page.css'; // Streets-specific styles

const DirectoryDetail = () => {
  const { directory } = useParams();
  const [subdirectories, setSubdirectories] = useState([]);
  const [images, setImages] = useState([]);
  const [textFiles, setTextFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}`)
      .then((response) => response.json())
      .then((data) => {
        setSubdirectories(data.subdirectories);
        setImages(data.images);
        setTextFiles(data.text_files);
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
    <div className="directory-container">
      {/* Title and text in the same styled box */}
      <div className="border-box">
        <h2>{directory}</h2>
        {textFiles.length > 0 && (
          <div>
            {textFiles.map((file, index) => (
              <p key={index}>{file.content}</p>
            ))}
          </div>
        )}
      </div>

      {/* Street buttons */}
      {subdirectories.length > 0 && (
        <div>
          <h3>Streets</h3>
          <div className="streets-button-container">
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
          <div className="images-container">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} className="directory-image" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectoryDetail;
