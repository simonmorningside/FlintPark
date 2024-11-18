// Import React and useState hook
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define a functional component called ExamplePage
export default function Streets(){
  // Define a piece of state called 'showInfo' and initialize it to 'false'
  const [showInfo, setShowInfo] = useState(false);

  // Toggle function to change the 'showInfo' state between true and false
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Example Page!</h1>
      <p>This is a simple page built with React.</p>

      {/* Button to toggle additional info */}
      <button onClick={toggleInfo}>
        {showInfo ? 'Hide Info' : 'Show Info'}
      </button>

      {/* Conditionally render additional information based on 'showInfo' state */}
      {showInfo && (
        <div style={{ marginTop: '20px' }}>
          <p>This will link to <Link to={`/stjohns/`}>StJohn</Link></p>
          <p>This will link to <Link to={`/flintfloralpark/`}>FlintFloralPark</Link></p>
        </div>
      )}
    </div>
  );
};
