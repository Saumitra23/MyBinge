const storageKey = "favorites";

export const favoritesHandler = ({ type, payload }) => {
  let current = JSON.parse(localStorage.getItem(storageKey));
  switch (type) {
    case "set": {
      if (current && !current.find((val) => val._id === payload._id)) {
        current.push(payload);
        localStorage.setItem(storageKey, JSON.stringify(current));
      } else {
        localStorage.setItem(storageKey, JSON.stringify([payload]));
      }
      break;
    }
    case "get": {
      return current;
    }
    default:
      let newVal = current?.filter((fav) => fav._id !== payload._id);
      localStorage.setItem(storageKey, JSON.stringify(newVal));
      if (newVal && newVal?.length === 0) {
        localStorage.removeItem(storageKey);
      }
  }
};

export const handleInfiniteScroll = () => {
  const winObj = window;
  return (
    winObj.scrollY + winObj.innerHeight + 100 >=
    winObj.document.body.offsetHeight
  );
};
