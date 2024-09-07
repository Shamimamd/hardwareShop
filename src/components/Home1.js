import React, { useState, useEffect } from "react";
// import "./Home.css";

const images = [
  "https://i.ibb.co/fpD0tFh/wardrobe.jpg", // Living Room
  "https://i.ibb.co/2W7pgnf/naomi-hebert-MP0bga-S-d1c-unsplash.jpg", // Kitchen
  "https://i.ibb.co/SK1vttC/kara-eads-L7-Ew-Hkq1-B2s-unsplash.jpg", // Bedroom
];

const Home1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button className="right-arrow" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Home1;
