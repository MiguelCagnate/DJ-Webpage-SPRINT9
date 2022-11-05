import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/images/slide_1.jpg";
import image2 from "../assets/images/slide_2.png";
import image3 from "../assets/images/slide_3.jpg";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3];

const zoomOutProperties = {
  duration: 800,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.2,
  arrows: true,  
};

const Slideshow = () => {
  return (
    <div className="SlideStyle">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "50%", height: "20%"}} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

export function Slide() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

