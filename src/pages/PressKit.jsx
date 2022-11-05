import React from "react";
import { Navigate } from "react-router-dom";
import { Slide } from "../components/Slide";




export const PressKit = ({ user }) => {
  if (!user) {
    return <Navigate to="/Register" replace />;
  }

  return (
    <div>
      <Slide/>
    
    </div>
  );
};
