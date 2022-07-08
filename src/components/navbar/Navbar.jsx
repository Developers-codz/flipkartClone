import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header-logo">
        <img
          className="logo-img"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        />
        <div className="bottom-text">
          <i>Explore</i>
          <i>Plus</i>
        </div>
      </div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search for products, brands and more"
      />
      <button className="login-btn">Login</button>
      <div className="cart-link">
        <i className="fa fa-shopping-cart fa-xs" aria-hidden="true"></i>
        <span>Cart</span>
      </div>
    </div>
  );
};
