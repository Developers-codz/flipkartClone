import React from "react";
import "./singlecard.css";

export const SingleCard = ({ product }) => {
  return (
    <div className="card-container">
      <img src={product.image} className="product-image" />
      <div className="category-name-wrapper">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </div>
      <div className="product-name-wrapper">
        <div>{product.name.slice(0, 15)}...</div>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
      </div>
      <div className="category-name-wrapper">₹{product.price}</div>
      <div className="category-name-wrapper">Sizes Available: {product.sizes.map(size => <span className="sizes">{size}</span>)}</div>
    </div>
  );
};
