import { useDispatch, useSelector } from "react-redux";
import { updateTab } from "../redux/dataSlice";
import Search from "./Search";

const Header = ({ searchInputHandler }) => {
  const dispatch = useDispatch();
  const { isSearch, currentTab } = useSelector((state) => state.myBinge);

  return (
    <header
      className="fixed z-10 flex-1 w-screen flex flex-row justify-around p-4 items-end bg-[rgba(0,0,0,0.37)]"
      aria-label="Header component of MyBinge Application"
    >
      <h1>MyBinge</h1>
      <h2
        onClick={() => dispatch(updateTab("Home"))}
        style={
          currentTab === "Home"
            ? {
                background: "rgb(176, 179, 181,0.2)",
              }
            : {}
        }
        aria-label="Select Home Tab"
        tabIndex={1}
      >
        Home
      </h2>
      <h2
        onClick={() => {
          if (!isSearch) dispatch(updateTab("Favorites"));
        }}
        style={
          currentTab === "Favorites"
            ? {
                background: "rgb(176, 179, 181,0.2)",
              }
            : {}
        }
        aria-label="Select Favorites Tab"
        tabIndex={2}
      >
        Favorites
      </h2>
      <Search searchInputHandler={searchInputHandler} />
    </header>
  );
};

export default Header;
