import React from "react";
import data from "../../data/data.json";
import { SingleCard } from "./SingleCard.jsx";

export const Main = () => {
  return (
    <div className="main-wrapper">
        {data.products.map((product,index) => {
          return <SingleCard product={product} key={index} />;
        })}
     
    </div>
  );
};
