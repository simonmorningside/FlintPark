import React, { useState, useEffect } from 'react';

const IntroPage = ({ onComplete }) => {
  const [showVideo, setShowVideo] = useState(true);

  // Transition from video to map after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 5000); // Display video for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {showVideo ? (
        <video
          src="path/to/your/video.mp4" // Replace with your video path
          autoPlay
          muted
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=..." // Embed your map
          className="w-full h-full border-none transition-opacity duration-1000"
          title="Map"
        />
      )}
      {/* Button to skip the intro manually */}
      <button
        onClick={onComplete}
        className="absolute bottom-10 right-100 p-2 bg-white text-black rounded"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default IntroPage;
