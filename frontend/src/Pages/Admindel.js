import React from "react";
import { Form, Button } from "react-bootstrap";
import Singleproduct1 from "./Singleproduct1";
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
  const [name, setName] = React.useState("");
  return (
    <div>
         <Adminnav /> 
      <h1>Deals</h1>
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter Title</Form.Label>
    <Form.Control  type="text" placeholder="Title" onChange={(e) => {
            setName(e.target.value);
          }}/>
  </Form.Group>
  <Button  type="submit"  onClick = { (e)=> {
axios({
  method: 'delete',
  url: "http://localhost:3030/dish" ,
 
  data: {
    name 
  }
});  
window.location.reload()
}
   }  >
    Delete
  </Button>
      
          {dish.map((dish, index) => (
            <Singleproduct1 key={index} dish={dish} />
          ))}
    </div>
  );
};
export default Adminview;