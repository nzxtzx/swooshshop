import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Link to="search" className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M15 14.9646L11.6167 11.5812M13.4444 7.18682C13.4444 10.6233 10.6586 13.4091 7.22221 13.4091C3.78578 13.4091 1 10.6233 1 7.18682C1 3.75037 3.78578 0.964569 7.22221 0.964569C10.6586 0.964569 13.4444 3.75037 13.4444 7.18682Z"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
};

export default Search;
