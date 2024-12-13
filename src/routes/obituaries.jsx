import React from 'react';
import './mtolivearchive.css';
const Obituaries = () => {
  return (
    <div className="obituaries">
      <h1>Obituaries</h1>
      <div className="image-grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <img key={index} src="https://via.placeholder.com/150" alt={`obituary-${index}`} className="placeholder-image" />
        ))}
      </div>
    </div>
  );
};

export default Obituaries;
