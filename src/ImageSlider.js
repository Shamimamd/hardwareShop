import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import int1 from "./Images/int1.jpg";
import int2 from "./Images/int2.jpg";
import int3 from "./Images/int3.jpg";
import int4 from "./Images/int4.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    {
      title: "Title 1",
      imgSrc: "https://i.ibb.co/C728Xx8/handle1.jpg/100/100",
    },
    { title: "Title 2", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 3", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 4", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 5", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 6", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 7", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 8", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 9", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 10", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 11", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 13", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 14", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
    { title: "Title 15", imgSrc: "https://picsum.photos/seed/picsum/100/100" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h3>{slide.title}</h3>
            <img src={slide.imgSrc} alt={slide.title} className="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
