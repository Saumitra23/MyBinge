import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardDetail from "./CardDetail";
import Filter from "./Filter";
import NoData from "./NoData";
import { favoritesHandler, handleInfiniteScroll } from "../utils/helpers";

const ListingCard = ({ handleFilter, handleFavs }) => {
  const { isSearch, isFilter, movieData, currentTab, searchData, filterData } =
    useSelector((state) => state.myBinge);
  const favoritesData = favoritesHandler({ type: "get", payload: "" });
  const [scrollCount, setScrollCount] = useState(8);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (handleInfiniteScroll()) setScrollCount((prev) => prev + 4);
    });
    return () =>
      window.removeEventListener("sroll", () => {
        handleInfiniteScroll();
      });
  }, []);

  return (
    <main
      className={`px-10 ${isSearch ? "py-24" : "py-5"} ease-out duration-500`}
    >
      {isSearch ? (
        searchData.length === 0 ? (
          <NoData />
        ) : (
          <section className="flex-1 flex flex-col gap-4 md:grid md:grid-cols-4 ">
            {searchData
              ?.slice(0, Math.min(scrollCount, searchData.length))
              ?.map((val) => (
                <CardDetail handleFavs={handleFavs} detail={val} />
              ))}
          </section>
        )
      ) : currentTab === "Home" ? (
        <>
          <Filter handleFilter={handleFilter} />
          <section className="flex flex-col gap-4 md:grid md:grid-cols-4 ">
            {!isFilter
              ? movieData
                  ?.slice(0, Math.min(scrollCount, movieData.length))
                  ?.map((val) => (
                    <CardDetail handleFavs={handleFavs} detail={val} />
                  ))
              : filterData
                  ?.slice(0, Math.min(scrollCount, filterData.length))
                  ?.map((val) => (
                    <CardDetail handleFavs={handleFavs} detail={val} />
                  ))}
          </section>
        </>
      ) : !favoritesData || favoritesData.length === 0 ? (
        <NoData />
      ) : (
        <section className="py-24 flex flex-col gap-4 md:grid md:grid-cols-4">
          {favoritesData
            ?.slice(0, Math.min(scrollCount, favoritesData.length))
            ?.map((val) => (
              <CardDetail handleFavs={handleFavs} detail={val} />
            ))}
        </section>
      )}
    </main>
  );
};

export default ListingCard;
