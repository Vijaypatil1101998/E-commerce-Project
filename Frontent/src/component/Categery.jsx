import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FilterSliceAction } from "../store/FilterAction";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle list item click
  const handleListItemClick = (category) => {
    dispatch(FilterSliceAction.filterAction(category));
    navigate(`/${category}`);
  };

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Color
          </a>
          <ul className="dropdown-menu">
            <li onClick={() => handleListItemClick("Red")}>Red</li>
            <li onClick={() => handleListItemClick("White")}>White</li>
            <li onClick={() => handleListItemClick("Black")}>Black</li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cloths
          </a>
          <ul className="dropdown-menu">
            <li onClick={() => handleListItemClick("Mens")}>Mens</li>
            <li onClick={() => handleListItemClick("Womens")}>Womens</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
