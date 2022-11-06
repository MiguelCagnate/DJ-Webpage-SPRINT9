import React from "react";
import Video from "../components/Video";

export const Home = () => {
  return (
  <div>
  <Video />

  <h2 className="SoundCloud">
  <iframe width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172009197&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
  </h2>
  <p className="AlertMsg">*If you would like to check the Press Kit Section, please click on register and fill the form and Login</p>
  </div>
  );
};


