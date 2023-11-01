import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, selectFilters } from "../../../redux/slices/products-filters";

const ResetFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="catalog-filters__reset">
      <button className="fulters__reset-button" onClick={handleResetFilters}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M9.66937 0.282494C9.52925 0.142054 9.33901 0.0631297 9.14062 0.0631297C8.94224 0.0631297 8.752 0.142054 8.61188 0.282494L4.94438 3.94249L1.27688 0.274994C1.13675 0.134554 0.946513 0.0556297 0.748125 0.0556297C0.549737 0.0556297 0.359499 0.134554 0.219375 0.274994C-0.073125 0.567494 -0.073125 1.03999 0.219375 1.33249L3.88687 4.99999L0.219375 8.66749C-0.073125 8.95999 -0.073125 9.43249 0.219375 9.72499C0.511875 10.0175 0.984375 10.0175 1.27688 9.72499L4.94438 6.05749L8.61188 9.72499C8.90438 10.0175 9.37687 10.0175 9.66937 9.72499C9.96187 9.43249 9.96187 8.95999 9.66937 8.66749L6.00187 4.99999L9.66937 1.33249C9.95438 1.04749 9.95438 0.567494 9.66937 0.282494Z"
            fill="#6C757D"
          />
        </svg>
      </button>
    </div>
  );
};

export default ResetFilters;
