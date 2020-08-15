
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Adminnav from "./Adminnav";
import axios from "axios";
import N from "./N";
function Adddeal (props)  {
  const [cnic, setCnic] = React.useState("");
  const [password, setPassword] = React.useState("");
    let history=useHistory();
    return (
        <div>
          <N/>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter Number</Form.Label>
    <Form.Control  type="number" placeholder="Enter number" onChange={(e) => {
            setCnic(e.target.value);
          }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => {
            setPassword(e.target.value);
          }}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick = { (e)=> {
    axios
    .post("http://localhost:3030/emp",{cnic,password})
    .then((res)=>{
      console.log(res.data);
      history.push("/Adminlogin");
    })
    .catch((err) => {
      console.log(err);
      alert("INValid")
    });
  } } >
    Add Deal
  </Button>
</Form>
        </div>
    )
  };
  export default Adddeal;