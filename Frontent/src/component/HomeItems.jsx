import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const HomeItems = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const elementCount = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleToAdd = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleToRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementCount ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={() => {
            handleToRemove();
          }}
        >
          <MdDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={() => {
            handleToAdd();
          }}
        >
          <IoIosAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItems;
