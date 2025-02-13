import React from 'react';
import './mtOliveArchive.css';
const Birthdays = () => {
  return (
    <div className="birthdays">
      <h1>Birthdays</h1>
      <div className="image-grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <img key={index} src="https://via.placeholder.com/150" alt={`birthday-${index}`} className="placeholder-image" />
        ))}
      </div>
    </div>
  );
};

export default Birthdays;
