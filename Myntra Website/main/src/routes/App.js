import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
function App() {
  const { isCurrentlyFetching } = useSelector(
    (store) => store.useFetchStatusSlice
  );

  return (
    <>
      <Header />
      <FetchItems />
      {/* here in false condition we have passed the <Outlet /> component so if user in
      Home section or in bag section Loading effect will show in both section */}
      {isCurrentlyFetching ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
