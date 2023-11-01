import React, { useState } from "react";
import { setFilter } from "../../../redux/slices/products-filters";
import { useDispatch } from "react-redux";

const SortFilter = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    dispatch(setFilter({ filterType: 'sort', filterValue: selectedSort }));
    console.log("Selected sort", selectedSort);
  };

  return (
    <div className="catalog-filters__sort">
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" onChange={handleSortChange} className="filter-select">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortFilter;
