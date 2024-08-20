import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDisplay = () => {
  const movieData = useSelector((state) => state.myBinge.movieData);
  const [currImg, setCurrImg] = useState(movieData[0]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrigger(!trigger);
      setCurrImg(movieData[parseInt(Math.random() * 41)]);
    }, 6000);
    return () => clearInterval(timer);
  }, [trigger, movieData]);

  return { currImg };
};

export default useDisplay;
