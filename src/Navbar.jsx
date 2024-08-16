import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ numberOfItems }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log("wowww");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2 style={{ fontFamily: "Matemasie" }}>Ecommerce</h2>
      </div>
      <ul className={`navlink ${menu ? "menuvisible" : ""} `}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="cart">
        <MdOutlineShoppingCart size={28} />
        <p className="cartNum">{numberOfItems}</p>
      </div>
      <div className="icon" onClick={handleMenu}>
        <div className={`bars ${menu ? "barone" : ""} `}></div>
        <div className={`bars ${menu ? "bartwo" : ""} `}></div>
        <div className={`bars ${menu ? "barthree" : ""} `}></div>
      </div>
    </div>
  );
};

export default Navbar;
