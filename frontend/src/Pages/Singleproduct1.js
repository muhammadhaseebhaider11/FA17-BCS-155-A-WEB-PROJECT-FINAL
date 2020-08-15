import React from "react";
import { Button } from "react-bootstrap";
const Singleproduct1 = ({ dish }) => {
  return (
          <div style = {{border : "solid"}} >
        <h2>{dish.name}</h2>
        <p>{dish.price}</p>
        <Button > Delete </Button>
    </div> 
  )
};
export default Singleproduct1;