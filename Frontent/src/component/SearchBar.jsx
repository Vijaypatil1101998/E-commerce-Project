import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FilterSliceAction } from "../store/FilterAction";
const SearchBar = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const products = useSelector((store) => store.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = async (e) => {
    setValue(e.target.value);
    setData(products);
  };
  const handlebySearching = () => {
    if (value) {
      dispatch(FilterSliceAction.filterAction(value));
    }
    setValue("");
    if (value) {
      navigate("/Filter");
    }
  };
  return (
    <div className="search_bar">
      <span
        className="material-symbols-outlined search_icon"
        onClick={handlebySearching}
      >
        search
      </span>
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
        onChange={onChange}
        value={value}
      />
      <div className="dropdown-content">
        {value &&
          data
            .filter(
              (item) => item.company.startsWith(value) && item.company !== value
            )
            .slice(0, 5)
            .map((item) => (
              <div
                className="search_items"
                key={item.id}
                onClick={(e) => setValue(item.company)}
              >
                {item.company}
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchBar;
