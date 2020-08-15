import React from "react";
const Singleproduct2 = ({ customer }) => {
  return (
    <div style = {{border : "solid"}} >
        <h2>Name: {customer.name}</h2>
        <h2>Contact: {customer.phNo}</h2>
        <h2>Email: {customer.email}</h2>
        <p><h1>Address :{customer.address}</h1></p>

    </div> 
  )
};
export default Singleproduct2;