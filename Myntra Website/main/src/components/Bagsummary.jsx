import { useSelector } from "react-redux";

const Bagsummary = () => {
  const bagItemsIds = useSelector((store) => store.useBagSlice);
  const items = useSelector((store) => store.useItemsSlice);

  let finalBagItems = items.filter((item) => {
    let itemIndex;
    return (itemIndex = bagItemsIds.indexOf(item.id) >= 0);
  });

  let bagItems = bagItemsIds.length;
  let allItemsTotalPrice = 0;
  let discount = 0;
  let finalTotal = 0;
  let ConvenienceFees = 0;

  finalBagItems.forEach((item) => {
    allItemsTotalPrice += item.prices.originalPrice;
    discount += item.prices.originalPrice - item.prices.currentPrice;
  });

  if (bagItemsIds.length > 0) {
    ConvenienceFees = 99;
    finalTotal = allItemsTotalPrice - discount + ConvenienceFees;
  } else {
    ConvenienceFees = 0;
    finalTotal = allItemsTotalPrice - discount + ConvenienceFees;
  }

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bagItems} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{allItemsTotalPrice}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{ConvenienceFees}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalTotal}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default Bagsummary;
