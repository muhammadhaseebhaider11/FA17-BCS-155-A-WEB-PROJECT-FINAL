import React from "react";
import SingleProduct from "./Singleproduct";
import axios from "axios";
import Adminnav from "./Adminnav";
const Adminview = () => {
  const [dish, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3030/dish")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
         <Adminnav /> 
      <h1>Deals</h1>
          {dish.map((dish, index) => (
            <SingleProduct key={index} dish={dish} />
          ))}
    </div>
  );
};
export default Adminview;