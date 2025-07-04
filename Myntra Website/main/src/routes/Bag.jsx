import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.useBagSlice);
  const items = useSelector((store) => store.useItemsSlice);
  let finalBagItems = items.filter((item) => {
    let itemIndex;
    return (itemIndex = bagItems.indexOf(item.id) >= 0);
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalBagItems.map((item) => (
            <Bagitem key={item.id} item={item} />
          ))}
        </div>
        <Bagsummary />
      </div>
    </main>
  );
};

export default Bag;
