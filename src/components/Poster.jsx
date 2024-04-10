import { useEffect, useState } from "react";
import poster1 from "../assets/Lesserafim-fanmeeting img.jpg";
import poster2 from "../assets/easy-poster1.jpg";
import poster3 from "../assets/easy-poster2.jpeg";
import poster4 from "../assets/perfectnight-poster1.jpeg";
import "../styles/Poster.css";

const Poster = () => {
  const posterArr = [poster1, poster2, poster3, poster4];
  const [currentPoserIndex, setCurrentPosterIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(0);

  const handleMouseEnter = () => {
    clearInterval(intervalId);
    console.log("마우스 올라감" + intervalId);
  };

  const handleMouseLeave = () => {
    setIsMouseLeave((prev) => {
      return prev + 1;
    });
    console.log("마우스 내려감" + intervalId);
  };

  useEffect(() => {
    const changePoster = () => {
      setCurrentPosterIndex((prev) => {
        return prev === posterArr.length - 1 ? 0 : prev + 1;
      });
    };

    const id = setInterval(changePoster, 2500);
    setIntervalId(id);

    console.log("현재 id값 " + id);

    return () => clearInterval(intervalId);
  }, [isMouseLeave]);

  return (
    <div>
      <img
        src={posterArr[currentPoserIndex]}
        alt=""
        id="poster"
        className="poster-animation"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></img>
    </div>
  );
};

export default Poster;
