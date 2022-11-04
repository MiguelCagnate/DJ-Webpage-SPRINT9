import React from "react";
import video from "../assets/beach-vid.mp4";

const Video = () => {
  return (
    <div className="VideoStyle">
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default Video;
