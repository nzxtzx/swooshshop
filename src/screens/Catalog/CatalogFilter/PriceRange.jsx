import React, { useEffect, useState } from "react";
import Slider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../../../redux/slices/products-filters";

const PriceRange = ({ minValue, maxValue }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [values, setValues] = useState([minValue, maxValue]);

  useEffect(() => {
    setValues([minValue, maxValue]);
    dispatch(setFilter({ filterType: 'priceMin', filterValue: minValue }));
    dispatch(setFilter({ filterType: 'priceMax', filterValue: maxValue }));
  }, [minValue, maxValue]);

  useEffect(() => {
    if (filters.priceMin === "" && filters.priceMax === "") {
      setValues([minValue, maxValue]);
    }
  }, [filters.priceMin, filters.priceMax]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
    dispatch(setFilter({ filterType: 'priceMin', filterValue: newValues[0] }));
    dispatch(setFilter({ filterType: 'priceMax', filterValue: newValues[1] }));
  };

  return (
    <div className="catalog-filters__price">
      <span>Price:</span>
      <Slider className="filters__price-range" min={minValue} max={maxValue} step={1} value={values} onAfterChange={handleSliderChange} />
      <div className="filters__price">
        <span>
          {values[0]}
          {minValue > 0 && "$"}
        </span>
        <span>—</span>
        <span>{values[1]}$</span>
      </div>
    </div>
  );
};

export default PriceRange;
