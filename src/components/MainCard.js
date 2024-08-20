import useDisplay from "../hooks/use-display";

const MainCard = () => {
  const { currImg } = useDisplay();
  return (
    <section className="relative">
      <figure className="flex flex-row">
        <img
          className="flex-1 brightness-50 "
          src={currImg?.backdrop_path}
          alt="movie-img"
        />
      </figure>
    </section>
  );
};

export default MainCard;
