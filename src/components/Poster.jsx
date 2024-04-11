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
  const [mouseToggle, setMouseToggle] = useState(false);

  const handleMouseEnter = () => {
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    setMouseToggle(!mouseToggle);
  };

  useEffect(() => {
    const changePoster = () => {
      setCurrentPosterIndex((prev) => {
        console.log(prev);
        return prev === posterArr.length - 1 ? 0 : prev + 1;
      });
    };

    const id = setInterval(changePoster, 2500);
    setIntervalId(id);

    return () => clearInterval(intervalId);
  }, [mouseToggle]);

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
