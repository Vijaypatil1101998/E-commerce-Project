import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const Filter = () => {
  const products = useSelector((store) => store.items);
  const searchedItems = useSelector((store) => store.filterProduct);

  return (
    <main>
      <div className="items-container">
        {products
          .filter(
            (item) =>
              item.company == searchedItems ||
              item.color == searchedItems ||
              item.gender == searchedItems
          )
          .map((item) => (
            <HomeItems key={item.id} item={item}></HomeItems>
          ))}
      </div>
    </main>
  );
};
export default Filter;
