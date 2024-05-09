import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";
import SortingDropdown from "./SortingDropdown";

const Filter = () => {
  const data = useSelector((store) => store.products);
  const searchedItems = useSelector((store) => store.filterProduct);
  return (
    <main>
      <SortingDropdown />
      <div className="items-container">
        {searchedItems
          ? data.products
              .filter(
                (item) =>
                  item.company == searchedItems ||
                  item.color == searchedItems ||
                  item.gender == searchedItems
              )
              .map((item) => <HomeItems key={item.id} item={item}></HomeItems>)
          : data.products.map((item) => (
              <HomeItems key={item.id} item={item}></HomeItems>
            ))}
      </div>
    </main>
  );
};
export default Filter;
