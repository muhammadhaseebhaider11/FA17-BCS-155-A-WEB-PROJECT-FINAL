import React from "react";
import { Button } from "react-bootstrap";
const Singleproduct1 = ({ dish }) => {
  const [_id, set_id] = React.useState("");
  return (
          <div style = {{border : "solid"}} >
        <h2>{dish.name}</h2>
        <p>{dish.price}</p>
    </div> 
  )
};
export default Singleproduct1;