import { useState } from "react";
import { Background } from "../assets/BackgroundData";


const [changeBackground, setChangeBackground] = useState(false);
const [isDetailVisible, toggleDetail] = useState(false);

const changeButton = (e, text) => {
    e.preventDefault();
    if (text === "About" && changeBackground !== "Home") {
      return setChangeBackground(changeBackground + 1);
    }
    if (text === "Sounds" && changeBackground !== 0) {
      return setChangeBackground(changeBackground - 1);
    }
  };

useEffect(() => {
    if (isDetailVisible) {
      const images = ["one", "two", "three"];
      const bg = images[Change];
      document.body.style.backgroundImage = `url(/img/${bg}.jpg)`;
      document.body.style.backgroundSize = 'cover';
    }
  }, [Change, isDetailVisible]);

  const Background = Background.map((element, index) => (
    <Paragraph key={index} className={`${index === Change ? "nuColor" : " "}`}>
      {element.txt}
    </Paragraph>
  ))