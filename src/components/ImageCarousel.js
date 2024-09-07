import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css"; // Optional: For custom styles

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://i.ibb.co/r72S0WW/image1.jpg",
    "https://i.ibb.co/r72S0WW/image1.jpg",
    "https://i.ibb.co/r72S0WW/image1.jpg",
    "https://i.ibb.co/r72S0WW/image1.jpg",
    "https://i.ibb.co/r72S0WW/image1.jpg",
    "https://i.ibb.co/r72S0WW/image1.jpg",
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ height: "35rem" }}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
