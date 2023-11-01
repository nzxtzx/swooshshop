import React, { useEffect, useState } from "react";
import { selectFilters, setFilter } from "../../../redux/slices/products-filters";
import { useDispatch, useSelector } from "react-redux";

const SizeFilter = ({ sizes }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [selectedSize, setSelectedSize] = useState(filters.size);

  useEffect(() => {
    setSelectedSize(filters.size);
  }, [filters.size]);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    dispatch(setFilter({ filterType: 'size', filterValue: newSize }));
  };

  return (
    <div className="catalog-filters__size">
      <label htmlFor="sizeSelector">Size:</label>
      <select id="sizeSelector" value={selectedSize} onChange={handleSizeChange} className="filter-select">
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeFilter;
