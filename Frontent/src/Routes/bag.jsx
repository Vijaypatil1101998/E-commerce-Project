import BagSummary from "../component/BagSummary";
import BagItems from "../component/BagItems";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const addBagItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {addBagItems.map((item) => {
            return <BagItems item={item} />;
          })}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
