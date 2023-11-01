import React, { useState, useEffect } from "react";
import { selectFilters, setFilter } from "../../../redux/slices/products-filters";
import { useDispatch, useSelector } from "react-redux";

const ColorFilter = ({ colors }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [selectedColor, setSelectedColor] = useState(filters.color);

  useEffect(() => {
    setSelectedColor(filters.color);
  }, [filters.color]);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    dispatch(setFilter({ filterType: "color", filterValue: newColor }));
  };

  return (
    <div className="catalog-filters__color">
      <label htmlFor="colorsSelector">Color:</label>
      <select
        id="colorsSelector"
        value={selectedColor}
        onChange={handleColorChange}
        className="filter-select"
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorFilter;
