import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilterType,
  updateFilterConfig,
  updateFilter,
  updateMovies,
} from "../redux/dataSlice";

const useFilter = () => {
  const dispatch = useDispatch();
  const { filterType, filterConfig, movieData } = useSelector(
    (state) => state.myBinge
  );

  useEffect(() => {
    if (filterType == 0) {
      dispatch(updateFilter({ toggle: false, value: [] }));
    }
  }, [filterType]);

  const handleFilter = (e) => {
    if (e.target.name === "FilterType") {
      dispatch(updateFilterType(e.target.selectedIndex));
    } else if (e.target.name === "FilterValue") {
      let updatedConfig = handleFilterConfig(e.target.value);
      let updatedMovie = filterMovieData(e.target.value);
      dispatch(
        updateFilterConfig({ val: e.target.value, config: updatedConfig })
      );
      dispatch(updateFilter({ toggle: true, value: updatedMovie }));
    }
  };

  const filterMovieData = (filterVal) => {
    let newFilterData;
    switch (filterType) {
      case 1:
        newFilterData = movieData?.filter((val) =>
          val?.genres.includes(filterVal)
        );
        break;
      case 2:
        newFilterData = movieData?.filter(
          (val) => val?.release_date.split("-")[0] === filterVal
        );
        break;
      default:
        newFilterData = movieData.filter((val) => val.rating == filterVal);
        break;
    }
    return newFilterData;
  };

  const handleFilterConfig = (filterVal) => {
    let newFilterConfig = [...filterConfig];
    let id = filterType - 1;
    newFilterConfig[id] = {
      ...newFilterConfig[id],
      selected: true,
    };
    newFilterConfig[id].vals = newFilterConfig[id].vals.map((filters) =>
      filters.type == filterVal
        ? { ...filters, selected: true }
        : { ...filters, selected: false }
    );
    return newFilterConfig;
  };

  const handleFavs = (id, value) => {
    console.log("favs", id, value);
    let newMovieData = movieData?.map((val) =>
      val._id == id ? { ...val, isFav: value } : val
    );
    updateMovies(newMovieData);
  };

  return { handleFilter, handleFavs };
};

export default useFilter;
