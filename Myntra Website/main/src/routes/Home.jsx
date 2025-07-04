import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.useItemsSlice);

  return (
    <main>
      <div className="main-items-container">
        {items.map((ITEM) => (
          <HomeItem key={ITEM.id} item={ITEM} />
        ))}
      </div>
    </main>
  );
};

export default Home;
