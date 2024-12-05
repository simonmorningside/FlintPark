import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../SubdirectoryDetail.css"; // Import the CSS file for the styles

// Top-level helper function to extract the image name
const getImageName = (imageUrl) => {
  return decodeURIComponent(imageUrl.split("/").pop().split(".")[0]);
};

const SubdirectoryDetail = () => {
  const { directory, subdirectory } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // To handle modal image

  useEffect(() => {
    fetch(
      `https://floral-park-webserver-861401374674.us-central1.run.app/api/directory/${directory}/${subdirectory}`
    )
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

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>
        Images in Subdirectory: {subdirectory} (Under {directory})
      </h2>

      <div className="grid">
        {images.map((image, index) => {
          const imageName = getImageName(image);  // Use the top-level helper function

          return (
            <div key={index} className="grid-item" onClick={() => openModal(image)}>
              <img src={image} alt={`Image ${index}`} />
              <div className="image-label">{imageName}</div> {/* Display the image name */}
            </div>
          );
        })}
      </div>

      {/* Modal for displaying the enlarged image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content-container">
            <img className="modal-content" src={modalImage} alt="Enlarged view" />
            <div className="caption">{getImageName(modalImage)}<p>LOTS LOTS AND LOTS OF TEXT YIPPE YIPPE YIPPE YIPPE</p></div> {/* Dynamic caption */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubdirectoryDetail;
