import { useEffect } from "react";
import { useSelector } from "react-redux";

const Filter = ({ handleFilter }) => {
  const { filterType, filterVal, filterConfig } = useSelector(
    (state) => state.myBinge
  );
  const myBinge = useSelector((state) => state.myBinge);
  console.log("myBinge", myBinge);
  return (
    <form
      className="flex flex-row gap-4 text-xs sm:text-sm lg:text-lg sm:justify-end sm:gap-10 text-black"
      onChange={handleFilter}
    >
      <select
        name="FilterType"
        value={filterType && filterConfig[filterType - 1].type}
      >
        <option value="option1" label="Please choose filter" />
        {filterConfig.map((val, id) => (
          <option
            id={id}
            value={val.type}
            label={val.type}
            selected={val.selected}
          />
        ))}
      </select>
      <select
        name="FilterValue"
        disabled={!filterType}
        className="mr-5"
        value={filterVal}
      >
        <option value="option1" label="Please choose Value" selected />
        {filterType &&
          filterConfig[filterType - 1].vals.map((val, id) => (
            <option
              id={id}
              value={val.type}
              label={val.type}
              selected={val.selected}
            />
          ))}
      </select>
    </form>
  );
};

export default Filter;
