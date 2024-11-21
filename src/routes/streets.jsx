// Import React and useState hook
//import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define a functional component called ExamplePage
export default function Streets(){
      return (
        <div className="streets-container">
          {/* Left Section: Description & Links */}
          <div className="streets-description">
            <h2>Explore Flint Floral Park Streets</h2>
            <p>
              Use the interactive map on the right to easily navigate through the streets
              of the Flint Floral neighborhood. Simply click on a street on the map for more
              information. Alternatively, you can use the links below to directly visit specific
              streets and find out more about them.
            </p>
    
            <ul className="streets-links">
            <p>Search the<Link to={`/flintfloralpark/`}>Neighborhoods</Link></p>
            </ul>
          </div>
    
          {/* Right Section: Interactive Map */}
        </div>
      );
    }
