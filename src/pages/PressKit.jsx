import React from "react";
import { Navigate } from "react-router-dom";
import { Slide } from "../components/Slide";
import { SocialMedia } from "../components/SocialMedia";


export const PressKit = ({ user }) => {
  if (!user) {
    return <Navigate to="/Register" replace />;
  }

  return (
    <div>
      
      <SocialMedia />
    </div>
  );
};
