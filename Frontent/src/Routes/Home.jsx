import { useDispatch, useSelector } from "react-redux";
import HomeItems from "../component/HomeItems";
import SortingDropdown from "../component/SortingDropdown";
import { FilterSliceAction } from "../store/FilterAction";
const Home = () => {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();
  dispatch(FilterSliceAction.filterAction(null));
  return (
    <main>
      <div className="items-container">
        <SortingDropdown />
        {items.map((item) => (
          <HomeItems key={item.id} item={item}></HomeItems>
        ))}
      </div>
    </main>
  );
};

export default Home;
