import React from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/images/Logo-Dj.png";
import slide2 from "../assets/images/slide_2.png"
import slide3 from "../assets/images/slide_3.jpg"
import slide4 from "../assets/images/slide_4.png"
import "./PressKitStyle.css";


export const PressKit = ({ user }) => {
  if (!user) {
    return <Navigate to="/Register" replace />;
  }

  return (
    <div>
    <h1 className="PresskitTitle">GET IN TOUCH</h1>
    <span >
    <hr></hr>
    <ul  className="ContactStyle">
      <li>BOOKINGS:</li>
      <p className="BookingParagraphtyle">
      For any enquiries regarding Bookings, Commercial Partnerships, Publicity, Marketing & Social Media
       or to be in touch with MILO BEMBE’s Management, please use the relevant contact information.
      </p>
        <li>E-mail: milobembe@gmail.com</li>
        <li>Manager: Victor Hernandez - hola@victorhdez.es </li>
        <li>Cellphone + (35) 622-942-639</li>
        <a href="mailto:milobembe@gmail.com">Any question? Please keep me posted</a>
      </ul>

    
    <hr></hr>
    <h2 className="PresskitTitle"> Material available to Download</h2>
    <a href={logo} download>
        <img src={logo} alt="logo del Dj con en alto relieve" className="LogoDj"/>
      </a>
        <a href={slide2} download>
        <img src={slide2} alt="dj picture white-light" className="DjPictureStyle"/>
      </a>
      <a href={slide3} download>
        <img src={slide3} alt="Dj picture at ocean Drive Barcelona" className="DjPictureStyle"/>
      </a>

      <a href={slide4} download>
        <img src={slide4} alt="Dj picture at ocean Drive Barcelona" className="DjPictureStyle"/>
      </a>

  
      
    </span>
    



      <span>

     
      </span>
      
    </div>
  );
};
