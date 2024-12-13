import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../SubdirectoryDetail.css"; // Import the CSS file for the styles

// Helper function to extract the last 1 to 4 alphanumeric characters from the image name
const getImageLastChars = (imageName) => {
  const match = imageName.match(/([a-zA-Z0-9]{1,4})$/); // Matches the last 1 to 4 alphanumeric characters
  return match ? match[0] : null; // If found, return the match; otherwise, return null
};

const SubdirectoryDetail = () => {
  const { directory, subdirectory } = useParams();
  const [images, setImages] = useState([]); // Images for the subdirectory
  const [printData, setPrintData] = useState(null); // To store the raw print data
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // To handle modal image
  const [names, setNames] = useState({}); // To store names with their associated addresses

  // Fetch names and addresses from the API
  useEffect(() => {
    fetch(`https://floral-park-webserver-861401374674.us-central1.run.app/api/names`)
      .then((response) => response.json())
      .then((data) => {
        setNames(data.names); // Store the names data
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);

  // Fetch images for the subdirectory
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

  // Fetch print data for the directory using the printer API
  useEffect(() => {
    fetch(
      `https://floral-park-webserver-861401374674.us-central1.run.app/api/printer/${subdirectory}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPrintData(data); // Store the raw print data
        console.log("Raw Print Data:", data); // Log the raw print data to console
      })
      .catch((error) => {
        console.error("Error fetching print data:", error);
      });
  }, [directory]); // Dependency only on the directory

  // Function to open the modal
  const openModal = (image) => {
    setModalImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  // Helper function to get the caption for the image
  const getImageCaption = (imageName) => {
    const address = imageName; // Assuming the image name matches the address
    const occupants = names[address];

    if (occupants) {
      // If any occupant's name contains the word "Vacant", treat it as if no data is present
      if (occupants.includes("Vacant")) {
        return '';
      }
      return `Occupants: ${occupants}`;
    }

    return '';
  };

  // Function to filter download links based on matching the last 1 to 4 alphanumeric characters
// Function to filter download links based on matching the last 1 to 4 alphanumeric characters
const handleDownload = (url, fileName) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    })
    .catch((error) => console.error("Error downloading file:", error));
};

const getMatchingDownloadLinks = (imageName) => {
  const lastChars = getImageLastChars(imageName);

  if (lastChars && printData && printData.images) {
    const matchingLinks = printData.images.filter((image) =>
      image.url.includes(lastChars)
    );

    return matchingLinks.map((image, index) => {
      const is5x7 = image.url.includes('5x7');
      const is8x11 = image.url.includes('8x10');
      const baseName = decodeURIComponent(image.url.split("/").pop().split(".")[0]);
      const label = is5x7
        ? `Download ${baseName}`
        : is8x11
        ? `Download ${baseName}`
        : `Download ${baseName}`;

      return (
        <div key={index} className="download-link">
          <button
            className="button"
            onClick={() => handleDownload(image.url, `${baseName}.jpg`)}
          >
            {label}
          </button>
        </div>
      );
    });
  }
  return null;
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
          const imageName = decodeURIComponent(image.split("/").pop().split(".")[0]);  // Get image name without extension

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
            <div className="caption">
              <p>{decodeURIComponent(modalImage.split("/").pop().split(".")[0])}</p>
              {getImageCaption(decodeURIComponent(modalImage.split("/").pop().split(".")[0]))} {/* Dynamic caption */}
              
              {/* Display matching download links */}
              {getMatchingDownloadLinks(decodeURIComponent(modalImage.split("/").pop().split(".")[0]))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubdirectoryDetail;
