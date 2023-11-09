import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavouritesCount } from "../../redux/slices/favourites.slice";

const Favorites = () => {
  const favouritesCount = useSelector(selectFavouritesCount);

  return (
    <Link to="favorites" className="favorites">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path
          d="M17.1514 2.78751C16.7253 2.36818 16.219 2.03547 15.6615 1.80845C15.104 1.58143 14.5063 1.46457 13.9027 1.46457C13.299 1.46457 12.7013 1.58143 12.1439 1.80845C11.5864 2.03547 11.0801 2.36818 10.654 2.78751L10 3.43721L9.34602 2.78751C8.91993 2.36818 8.41362 2.03547 7.85614 1.80845C7.29866 1.58143 6.70096 1.46457 6.09733 1.46457C5.4937 1.46457 4.89601 1.58143 4.33852 1.80845C3.78104 2.03547 3.27474 2.36818 2.84865 2.78751C1.04807 4.55337 0.937658 7.53533 3.20537 9.80096L10 16.4646L16.7946 9.80096C19.0623 7.53533 18.9519 4.55337 17.1514 2.78751Z"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className={`favorites-counter ${favouritesCount > 0 ? "visible" : ""}`}>{favouritesCount > 0 && <p>{favouritesCount}</p>}</div>
    </Link>
  );
};

export default Favorites;
