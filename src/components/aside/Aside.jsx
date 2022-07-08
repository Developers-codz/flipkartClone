import React from "react";
import "./aside.css";
import {
  setCategory,
  setBrand,
  setSizes,
  setPrice,
  resetFilters,
} from "../../productSlice";
import { useDispatch, useSelector } from "react-redux";

export const Aside = () => {
  const categories = ["men", "women", "children"];
  const brands = ["nike", "adidas", "mokshi"];
  const sizes = ["S", "M", "L"];
  const dispatch = useDispatch();
  const sizeArray = useSelector((store) => store.products?.sizes);
  const price = useSelector((store) => store.products?.price);
  return (
    <div className="aside-container">
      <div className="filter-text">
        <div>Filters</div>
        <button onClick={() => dispatch(resetFilters())}>Clear All</button>
      </div>
      <div className="filter-wrapper">
        <h3>Category</h3>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="category"
                id={category}
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              />
              <label htmlFor={category}>{category.toUpperCase()}</label>
            </div>
          );
        })}

        <h3>Brand</h3>
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="brand"
                id={brand}
                value={brand}
                onChange={(e) => dispatch(setBrand(e.target.value))}
              />
              <label htmlFor={brand}>{brand.toUpperCase()}</label>
            </div>
          );
        })}

        <h3>Sizes</h3>
        {sizes.map((size, index) => {
          return (
            <span key={index}>
              <input
                type="checkbox"
                name="size"
                id={size}
                value={size}
                onChange={(e) => dispatch(setSizes(e.target.value))}
              />
              <label htmlFor={size}>{size}</label>
            </span>
          );
        })}
        <h3>Sort by</h3>
        <input
          type="radio"
          name="price"
          id="low-to-high"
          checked={price === "low-to-high"}
          value="low-to-high"
          onClick={(e) => dispatch(setPrice(e.target.value))}
        />
        <label htmlFor="low-to-high">Low to High</label>
        <input
          type="radio"
          name="price"
          id="High-to-low"
          checked={price === "high-to-low"}
          onClick={() => dispatch(setPrice("high-to-low"))}
        />
        <label htmlFor="High-to-low">High to Low</label>
      </div>
    </div>
  );
};
