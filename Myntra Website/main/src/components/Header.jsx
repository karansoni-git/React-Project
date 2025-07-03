import { IoSearchSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.useBagSlice);

  return (
    <header>
      <div className="logo_container">
        <NavLink to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </NavLink>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <IoSearchSharp className="search_icon" />

        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <GoPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaRegHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <NavLink to="/bag" className="action_container cart">
          <BsCart4 />
          <span className="action_name">Bag</span>
          <span
            className={
              bag.length > 0 ? "bag-item-count" : "bag-item-count-notselected"
            }
          >
            {bag.length > 0 ? bag.length : ""}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
