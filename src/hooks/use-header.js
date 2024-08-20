import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../redux/dataSlice";

export const useHeader = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.myBinge.movieData);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      let searchData = movieData?.filter((movie) =>
        movie?.title.toLowerCase().includes(searchVal)
      );
      dispatch(updateSearch(searchData));
    }, 400);

    return () => clearTimeout(timer);
  }, [searchVal]);

  const searchInputHandler = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };

  return {
    searchInputHandler,
  };
};
