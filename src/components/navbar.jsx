import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="shopTitle">Book Store</h2>
      <div className="links">
        <Link to="/"><span className="homeButton">Home</span></Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <div className="cartIcon">
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>
        </div>
      </div>
    </div>
  );
};
