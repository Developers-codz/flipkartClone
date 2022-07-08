import React from "react";
import data from "../../data/data.json";
import { SingleCard } from "./SingleCard.jsx";
import {priceSortedData,categoryFilteredData,brandFiltedData,sizeFilteredData} from "../../functions"
import { useSelector } from "react-redux";
export const Main = () => {
  const {price,category,brands,sizes} = useSelector(store => store.filters)

  const categorySortedData = categoryFilteredData(data.products,category)
  const brandSortedData = brandFiltedData(categorySortedData,brands)
  const sizeSortedData = sizeFilteredData(brandSortedData,sizes)
  const sortedData = priceSortedData(sizeSortedData,price)
  return (
    <div className="main-wrapper">
        {sortedData.map((product,index) => {
          return <SingleCard product={product} key={index} />;
        })}
     
    </div>
  );
};
