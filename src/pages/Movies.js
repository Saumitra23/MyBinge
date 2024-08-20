import MainCard from "../components/MainCard";
import ListingCard from "../components/ListingCard";
import { useSelector } from "react-redux";

const Recommendations = ({ handleFilter, handleFavs }) => {
  const { isSearch, currentTab } = useSelector((state) => state.myBinge);

  return (
    <section className="min-h-[1000px]">
      {!isSearch && currentTab !== "Favorites" && <MainCard />}
      <ListingCard handleFilter={handleFilter} handleFavs={handleFavs} />
    </section>
  );
};

export default Recommendations;
