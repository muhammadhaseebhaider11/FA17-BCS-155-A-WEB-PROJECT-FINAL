
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Adminnav from "./Adminnav";
import axios from "axios";
function Adddeal (props)  {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
    let history=useHistory();
    return (
        <div>
          <Adminnav />
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter Title</Form.Label>
    <Form.Control  type="text" placeholder="Title" onChange={(e) => {
            setName(e.target.value);
          }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Price</Form.Label>
    <Form.Control type="number" placeholder="Price" onChange={(e) => {
            setPrice(e.target.value);
          }}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick = { (e)=> {
    axios
    .post("http://localhost:3030/dish",{name,price})
    .then((res)=>{
      console.log(res.data);
      history.push("/Adminlogin");
    })
    .catch((err) => {
      console.log(err);
      alert("INVALID PRICE OR NAME")
    });
  } } >
    Add Deal
  </Button>
</Form>
        </div>
    )
  };
  export default Adddeal;