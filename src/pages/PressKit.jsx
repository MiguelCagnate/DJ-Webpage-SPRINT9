import React from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/images/Logo-Dj.png";

import "./PressKitStyle.css";

export const PressKit = ({ user }) => {
  if (!user) {
    return <Navigate to="/Register" replace />;
  }

  return (
    <div>
      <a href={logo} download>
        <img
          src={logo}
          alt="logo del Dj con en alto relieve"
          className="LogoDj"
        />
      </a>
      <a href="mailto:gmail@gmail.com">Any question? Please keep me posted</a>
      {/* <Slide /> */}
    </div>
  );
};
