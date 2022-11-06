import React from "react";
import { Slide as SlideContainer, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/images/slide_1.jpg";
import image2 from "../assets/images/slide_2.png";
import image3 from "../assets/images/slide_3.jpg";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

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
      <SlideContainer>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "50%", height: "20%" }}
              src={each}
            />
          ))}
      </SlideContainer>
    </div>
  );
};

export function Slide() {
  return <Slideshow />;
}
