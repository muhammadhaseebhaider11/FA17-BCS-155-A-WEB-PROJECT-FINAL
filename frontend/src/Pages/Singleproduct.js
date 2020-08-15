import React from "react";
const Singleproduct = ({ dish }) => {
  return (
    <div style = {{border : "solid"}} >
        <h2>{dish.name}</h2>
        <p>{dish.price}</p>
    </div> 
  )
};
export default Singleproduct;