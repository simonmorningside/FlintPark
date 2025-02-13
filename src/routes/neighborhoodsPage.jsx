import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css'; // Global styles
import '../../styles/streets-page.css'; // Streets-specific styles

export default function Streets() {
  return (
    <div>
      {/* Header Section */}
      <div className="header border-box" style={{ marginTop: "60px" }}>
        <h2>Flint's Historical Black Neighborhoods</h2>
        <p>
          All Flint neighborhoods are home to a multitude of vibrant Black cultures now, 
          but for much of the 20th century restrictive covenants and racialized lending 
          practices prevented Black residents from purchasing or renting homes in many 
          neighborhoods. Most of Flint’s Black residents lived in two neighborhoods: St John 
          Street on the Northside and the historical Southside. In 1910, Flint’s Black 
          residents were a tight-knit community of less than 500 people who shared their 
          neighborhoods with a diverse group of recent immigrants. In the 1930s American 
          neighborhoods became increasingly racially segregated, and by 1940 almost all of 
          Flint’s 6000 Black residents lived in these two neighborhoods. St. John and the 
          Southside were home to Black-owned homes and businesses and Black churches, schools, 
          community centers and clubs.
          </p>
      </div>

      {/* Main Content */}
      <div className="streets-container">
        {/* Left Section: Description & Links */}
        <div className="streets-description">
          <p>
            Use the interactive map on the right to easily navigate through the streets
            of the Flint Floral neighborhood. Simply click on a street on the map for more
            information or use the binocular icon to search by name. Alternatively, you can 
            use the link below to directly visit specific
            streets and find out more about them.
          </p>

          <ul className="streets-links">
            <p>Search the <Link to={`/flintfloralpark/`}>Neighborhoods</Link></p>
          </ul>
        </div>

        {/* Right Section: Interactive Map */}
        <div className="streets-map">
          <iframe
            src="/floral-park-map/index.html"  // Path to the exported QGIS2Web HTML file
            title="Flint Floral Park Map"
            style={{ width: '100%', height: '100%', border: 'none' }}  // Adjust dimensions as needed
          />
        </div>
      </div>
    </div>
  );
}
