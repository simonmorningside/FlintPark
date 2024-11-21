import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SubdirectoryDetail = () => {
  const { directory, subdirectory } = useParams();  // Get both directory and subdirectory from the URL
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images for the selected subdirectory
  useEffect(() => {
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}/${subdirectory}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.images);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [directory, subdirectory]);

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div>
      <h2>Subdirectory: {subdirectory} in {directory}</h2>

      {/* Display images */}
      {images.length > 0 ? (
        <div>
          <h3>Images</h3>
          <div>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default SubdirectoryDetail;
