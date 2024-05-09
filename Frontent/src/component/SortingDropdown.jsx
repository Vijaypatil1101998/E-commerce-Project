import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sortSliceActions } from "../store/SortSlice";

const SortingDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "priceLowToHigh") {
      dispatch(sortSliceActions.sortProductsByLowPrice());
    } else {
      dispatch(sortSliceActions.sortProductsByHighPrice());
    }
    navigate(`/${selectedValue}`);
  };

  return (
    <div className="SortingDropdown-container">
      <label htmlFor="sorting" className="SortingDropdown-label">
        Sort by:
      </label>
      <select
        className="SortingDropdown-select"
        id="sorting"
        value={selectedOption}
        onChange={handleSelectionChange}
      >
        <option style={{ fontWeight: 700 }} value="">
          Recommended
        </option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="">Popularity</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
