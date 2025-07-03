import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const Bagitem = ({ item }) => {
  const bag = useSelector((store) => store.useBagSlice);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.itemImg} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.brandName}</div>
          <div className="item-name">{item.itemName}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.prices.currentPrice}</span>
            <span className="original-price">
              Rs {item.prices.originalPrice}
            </span>
            <span className="discount-percentage">
              ({item.prices.discount}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">{item.returnPeriod} Days</span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Deliver after
            <span className="delivery-details-days">
              &nbsp;{item.deliveryDays}Days
            </span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleRemoveItem}>
          <AiOutlineClose />
        </div>
      </div>
    </>
  );
};

export default Bagitem;
