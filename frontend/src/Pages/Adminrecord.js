import React from "react";
import Singleproduct2 from "./Singleproduct2";
import axios from "axios";
import Adminnav from "./Adminnav";
const Adminrecord = () => {
    const [customer, setCustomer] = React.useState([]);
    const getData = () => {
    axios
      .get("http://localhost:3030/customer")
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
    return (  
        <div>
            <Adminnav />
            <h1>Customers</h1>
          {customer.map((customer, index) => (
            <Singleproduct2 key={index} customer={customer} />
          ))}
        </div>
    );
}
export default Adminrecord;