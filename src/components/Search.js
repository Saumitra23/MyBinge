import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../redux/dataSlice";

const Search = ({ searchInputHandler }) => {
  const dispatch = useDispatch();
  const { isSearch } = useSelector((state) => state.myBinge);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isSearch]);

  return (
    <main
      className="flex-[2] flex flex-row mr-2 ml-4 md:ml-10 md:mr-10 xl:ml-96 lg:ml-40 items-end justify-end opacity-60"
      aria-label="Search Tab"
      tabIndex={3}
    >
      {!isSearch ? (
        <figure className="px-2 py-2 md:px-3 md:pt-3 hover:scale-105 duration-500 hover:bg-white hover:text-black rounded-full ease-in">
          <LuSearch
            className="size-6"
            cursor={`pointer`}
            onClick={() => dispatch(toggleSearch())}
          />
        </figure>
      ) : (
        <figure className="flex-1 flex flex-row px-2 py-2 md:px-3 md:py-3 bg-gray-700 rounded-md">
          <LuSearch
            className="size-4 mt-1 sm:size-6"
            cursor={`pointer`}
            onClick={() => dispatch(toggleSearch())}
          />
          <input
            placeholder="search"
            aria-label="input search value"
            className="flex-1 text-xs mx-1 sm:text-lg w-8 bg-transparent outline-transparent focus-visible:outline-none sm:mx-2"
            onChange={searchInputHandler}
            ref={ref}
          />
        </figure>
      )}
    </main>
  );
};

export default Search;
