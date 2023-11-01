import React, { useEffect, useState } from "react";
import { selectFilters, setFilter } from "../../../redux/slices/products-filters";
import { useDispatch, useSelector } from "react-redux";

const GenderFilter = ({ genders }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [selectedGender, setSelectedGender] = useState(filters.gender);

  useEffect(() => {
    setSelectedGender(filters.gender);
  }, [filters.gender]);

  const handleGenderChange = (event) => {
    const newGender = event.target.value;
    setSelectedGender(newGender);
    dispatch(setFilter({ filterType: "gender", filterValue: newGender }));
  };

  return (
    <div className="catalog-filters__gender">
      <label htmlFor="genderSelector">Gender:</label>
      <select
        id="genderSelector"
        value={selectedGender}
        onChange={handleGenderChange}
        className="filter-select"
      >
        {genders.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderFilter;
