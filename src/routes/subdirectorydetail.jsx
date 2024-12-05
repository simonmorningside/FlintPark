import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../SubdirectoryDetail.css"; // Import the CSS file for the styles

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
          // Decode the URL-encoded string and extract image name without the extension
          const imageName = decodeURIComponent(image.split("/").pop().split(".")[0]);

          return (
            <div key={index} className="grid-item" onClick={() => openModal(image)}>
              <img src={image} alt={`Image ${index}`} />
              <div className="image-label">{imageName}</div> {/* Add the label */}
            </div>
          );
        })}
      </div>

      {/* Modal for displaying the enlarged image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default SubdirectoryDetail;
