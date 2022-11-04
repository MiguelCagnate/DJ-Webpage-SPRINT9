import { BsTwitter} from "react-icons/bs";
import {SlSocialSoundcloud} from "react-icons/sl"

export function SocialMedia() {
  return (
    <ul>
      <li className="SocialMedia">  <a href='https://twitter.com/MiloBembe'>  <BsTwitter />  </a> </li>
        <li className="SocialMedia"><a href="https://soundcloud.com/milobembe"><SlSocialSoundcloud/></a>  </li>
    </ul>
  );
}