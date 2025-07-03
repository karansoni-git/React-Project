import { MdDeleteForever } from "react-icons/md";
import { BiSolidCartAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.useBagSlice);
  const isElementFound = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="single-item-container">
      <img src={item.itemImg} alt="item image" className="item-image" />
      <div className="rating">
        {item.rating.stars}⭐ | {item.rating.reviews}
      </div>
      <div className="brand-name">{item.brandName}</div>
      <div className="item-name">{item.itemName}</div>
      <div className="price-section">
        <span className="current-price">Rs {item.prices.currentPrice}</span>
        <span className="original-price">Rs {item.prices.originalPrice}</span>
        <span className="discount">({item.prices.discount}% OFF)</span>
      </div>
      {isElementFound ? (
        <button
          type="button"
          className="add-bag-btn remove"
          onClick={handleRemoveItem}
        >
          <MdDeleteForever />
          <span>Remove</span>
        </button>
      ) : (
        <button
          type="button"
          className="add-bag-btn add"
          onClick={handleAddToBag}
        >
          <BiSolidCartAdd />
          <span>Add To Bag</span>
        </button>
      )}
    </div>
  );
};

export default HomeItem;
