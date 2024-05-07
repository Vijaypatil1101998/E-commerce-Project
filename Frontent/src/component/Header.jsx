import { IoPerson, IoBagSharp } from "react-icons/io5";
import { GiRoyalLove } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Sidebar from "../component/Categery";
import { useNavigate } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  const navigation = useNavigate();
  const handleOnClick = () => {
    navigation("/RegistrationForm");
  };
  const homeClick = () => {
    navigation("/");
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.jpg"
            alt="Myntra Home"
            style={{ width: "70px", height: "70px" }}
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <div className="category" href="#">
          Category
          <dir className="side">
            <Sidebar />
          </dir>
        </div>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <SearchBar />
      <div className="action_bar">
        <div className="action_container dummyHome " onClick={homeClick}>
          <IoHome />
          <span className="action_name">Home</span>
        </div>
        <div className="action_container  dummyCategory" href="#">
          <TbCategoryFilled />
          Category
          <dir className="side">
            <Sidebar />
          </dir>
        </div>
        <div className="action_container" onClick={handleOnClick}>
          <IoPerson />
          <span className="action_name">Registration</span>
        </div>

        <div className="action_container">
          <GiRoyalLove />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagSharp />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
