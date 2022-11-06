import React from "react";
import { Navigate } from "react-router-dom";
import { Slide } from "../components/Slide";
import logo from "../assets/images/Logo-Dj.png"



export const PressKit = ({ user }) => {
  if (!user) {
    return <Navigate to="/Register" replace />;
  }

  return (
    <div>
       <img src={logo} alt="logo del Dj con en alto relieve" className="LogoDj" />
      <Slide/>
    
    </div>
  );
};
