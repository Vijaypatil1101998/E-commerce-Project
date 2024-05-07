import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../component/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LodingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
