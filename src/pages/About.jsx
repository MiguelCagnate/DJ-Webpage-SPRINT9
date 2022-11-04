import React from "react";
import Profilepic from "../assets/images/slide_2.png";

export const About = () => {
  return (
    <div className="AboutStyle">
      <p>
        {" "}
        <li>
          Milo Bembe, (Santa Marta-Colombia🌴, December 11, 1982), is a
          Colombian DJ origin of House, Afro House and Tech House. He started at
          the age of 20 in clubs in Santa Marta mixing Caribbean and Latin
          music, going through new hits of the moment. Moved to Europe where he
          had his first contact with electronic music of which he is now a
          faithful defender.{" "}
        </li>
        <li>
          The sound of Afro House and House is a delight for those venues who
          want to surprise their customers with a live deejay He has played at
          venues such as Ocean Drive Hotel, Arde Barcelona, Café Bar 18, Pachito
          Sitges, Sweat Bar and many more. At festivals like Taste of Techno,
          and Sona que trona! If you want to hire him, you just have to contact
          us.
        </li>
      </p>
      <img
        src={Profilepic}
        alt="Adam Hall performance Dj"
        className="Profilepicture"
      />
    </div>
  );
};
