import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/images/slide_1.jpg";
import image2 from "../assets/images/slide_2.png";
import image3 from "../assets/images/slide_3.jpg";

const images = [image1, image2, image3];

const zoomOutProperties = {
  duration: 3100,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.2,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{
              width: "25%",
              borderRadius: "10%",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            src={each}
          />
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
