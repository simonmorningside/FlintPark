import React from 'react';
import './mtolivearchive.css';
const Graduations = () => {
  return (
    <div className="graduations" >
      <h1>Graduations</h1>
      <div className="image-grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <img key={index} src="https://via.placeholder.com/150" alt={`graduation-${index}`} className="placeholder-image" />
        ))}
      </div>
    </div>
  );
};

export default Graduations;
