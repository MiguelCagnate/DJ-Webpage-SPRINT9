import { BsTwitter } from "react-icons/bs";
import { SlSocialSoundcloud } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { TiSocialYoutube } from "react-icons/ti";
import "../../src/SocialMedia.css";

export function SocialMedia() {
  return (
    <ul>
      <li className="SocialMedia">
        {" "}
        <a href="https://twitter.com/MiloBembe">
          {" "}
          <BsTwitter />{" "}
        </a>{" "}
      </li>
      <li className="SocialMedia">
        <a href="https://soundcloud.com/milobembe">
          <SlSocialSoundcloud />
        </a>
      </li>
      <li className="SocialMedia">
        <a href="https://www.facebook.com/MILOBEMBE">
          <FaFacebook />
        </a>
      </li>
      <li className="SocialMedia">
        <a href="https://www.instagram.com/milobembe">
          <SiInstagram />
        </a>
      </li>
      <li className="SocialMedia">
        <a href="https://www.youtube.com/channel/UCM7Zh5bPh3PS8gQbP88ackg">
          <TiSocialYoutube />
        </a>
      </li>
    </ul>
  );
}
