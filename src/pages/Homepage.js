import Header from "../components/Header";
import Movies from "./Movies";
import { useHeader } from "../hooks/use-header";
import useFilter from "../hooks/use-filter";

const Homepage = () => {
  const { searchInputHandler } = useHeader();
  const { handleFilter, handleFavs } = useFilter();

  return (
    <section>
      <Header searchInputHandler={searchInputHandler} />
      <Movies handleFilter={handleFilter} handleFavs={handleFavs} />
    </section>
  );
};

export default Homepage;
