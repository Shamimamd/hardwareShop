import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
const images = [
  "https://picsum.photos/id/1/400/400", // Living Room
  "https://picsum.photos/id/12/200/300", // Kitchen
  "https://picsum.photos/id/32/200/300", // Bedroom
  "https://picsum.photos/id/43/200/300", // Dining Room
  "https://picsum.photos/id/556/200/300", // Bathroom
  "https://picsum.photos/id/6/200/300", // Home Office
  "https://picsum.photos/id/743/200/300", // Entrance Hall
  "https://picsum.photos/id/84/200/300", // Garden
  "https://picsum.photos/id/93/200/300", // Kids Room
  "https://picsum.photos/id/100/200/300", // Garage
  "https://picsum.photos/id/102/200/300", // Garage
  "https://picsum.photos/id/300/200/300", // Garage
  "https://picsum.photos/id/119/200/300", // Garage
  "https://picsum.photos/id/203/200/300", // Garage
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="image-row">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
