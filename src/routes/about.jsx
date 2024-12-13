export default function About() {
  return (
    <div className="about-container" style={{ marginTop: "60px" }}>
      <div className="about-section">
        <div className="text-section border-box">
          <h2>Tax Photos</h2>
          <p>
            The residential and commercial images here were taken by the City of Flint tax 
            assessor’s office between 1959 and 1971 on 35mm Kodak X Plus black and white film. 
            The original films are held at the Sloan Museum of Discovery archive. They were 
            digitized from the original films between 2020 and 2023 at 5000 ppi using a Prime 
            Film XA Super Edition scanner. Scanning was completed by University of Michigan-Flint 
            students Casey DeMoss, Courtney Hosier, Courtney Messler, and Precious Williams under 
            the supervision of John Pendell. The digitization protocols and metadata structure was 
            developed by Natalie Frary, John Pendell and Vickie Larsen in consultation with Anne 
            Cong-Huyen, Joe Bauers, and Matt Caruthers, members of the Anti-Racist Digital Research 
            Initiatives support team at the University of Michigan College of Literature Science 
            and the Arts. 1959 residents were identified by Nuftalem Beyene using optical character 
            recognition of the Polk City Directory. Images were improved and formatted for download 
            using Photoshop by Noah Diener. The digitized images were converted into accessible formats 
            to ensure compatibility with web viewing and download by Simon Zychowski and Mackailee Longobricco.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder Image"
          className="about-image"
        />
      </div>
      <div className="text-section border-box">
          <h2>Interactive Maps</h2>
          <p>
          Lennx Brown streamlined access to house images by leveraging QGIS to georeference map images. He 
          meticulously mapped each street and linked them to their corresponding house images, creating an 
          organized and user-friendly system.
          </p>
      </div>
    </div>
  );
}
