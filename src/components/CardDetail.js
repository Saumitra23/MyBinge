import { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { favoritesHandler } from "../utils/helpers";
import { useSelector } from "react-redux";

const CardDetail = ({ detail, handleFavs }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const currentTab = useSelector((state) => state.myBinge.currentTab);

  return (
    <figure
      className={`relative flex-1 flex flex-row justify-between md:block md:w-[150px] md:h-[250px] lg:w-[250px] lg:h-[500px] ease-in-out ${
        isHovered &&
        "hover:scale-[1.01] lg:hover:scale-105 duration-500 bg-black shadow-xl shadow-slate-700 z-20"
      }`}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
      aria-label="Movie Card"
    >
      <div className="mr-4 sm:max-w-20 md:max-w-max">
        <img
          src={detail.poster_path}
          alt={detail._id}
          className={`w-80 h-40 sm:w-14 sm:h-14 mr-4 flex items-start md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[350px] rounded-md hover:cursor-pointer`}
        />
      </div>
      <section
        className={`flex-[2] flex flex-row gap-10 text-start ${
          isHovered ? "md:block" : "md:hidden"
        }`}
      >
        <figure
          onClick={() => {
            setIsHovered(false);
            setIsFav(!isFav);
          }}
        >
          {currentTab === "Home" ? (
            !isFav ? (
              <MdFavoriteBorder
                onClick={() => {
                  favoritesHandler({ type: "set", payload: detail });
                  handleFavs(detail._id, true);
                }}
                className="z-30 block flex-1 md:absolute md:bottom-4 md:right-2 lg:bottom-10 lg:right-11 cursor-pointer"
                size={32}
              />
            ) : (
              <MdOutlineFavorite
                onClick={() => {
                  favoritesHandler({ type: "remove", payload: detail });
                  handleFavs(detail._id, false);
                }}
                className="z-30 block flex-1 md:absolute md:bottom-4 md:right-2 lg:bottom-10 lg:right-11 cursor-pointer"
                size={32}
              />
            )
          ) : null}
        </figure>
        <h3 className="m-0 text-start absolute top-10 sm:block sm:static md:hidden lg:block">
          {detail?.title}
        </h3>
        <RiMovie2Fill
          size={20}
          color="white"
          className="hidden md:absolute md:block left-4 bottom-4"
        />
        <div className="flex-1 md:flex md:flex-row text-end md:w-max md:absolute bottom-1 lg:justify-around">
          <h3 className="hidden md:w-max md:block md:flex-1 ">MyBinge</h3>
          <h3 className=" md:hidden lg:block">
            {detail?.release_date.split("-")[0]}
          </h3>
        </div>
      </section>
    </figure>
  );
};

export default CardDetail;
