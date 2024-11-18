// Import React and useState hook
import React, { useState } from 'react';

// Define a functional component called ExamplePage
export default function About(){
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
          <p>Here’s some extra information about this page.</p>
          <p>You can build amazing things with React!</p>
        </div>
      )}
    </div>
  );
};
