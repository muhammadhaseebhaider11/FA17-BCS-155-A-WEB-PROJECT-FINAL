import React from "react";
import { Modal, Button,Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function OrderForm({ handleShow, handleClose, show }) {
    const [name, setName] = React.useState("");
    const [phNo, setPhNo] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    let history=useHistory();
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter Your Details</Modal.Body>
        <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name"   onChange={(e) => {
            setName(e.target.value);
          }} />
  </Form.Group>

  <Form.Group controlId="formBasicPhone">
    <Form.Label>PhoneNumber</Form.Label>
    <Form.Control type="Number" placeholder="00000000000" onChange={(e) => {
            setPhNo(e.target.value);
          }}/>
  </Form.Group>

  <Form.Group controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" onChange={(e) => {
            setAddress(e.target.value);
          }} />
    <Form.Text className="text-muted">
      We'll never share your address with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  onChange={(e) => {
            setEmail(e.target.value);
          }}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick = { (e)=> {
    axios
    .post("http://localhost:3030/customer",{name,phNo,address,email})
    .then((res)=>{
      console.log(res.data);
      alert("added");
      history.push("/Bucket");
    })
    .catch((err) => {
      console.log(err);
      alert("please enter correct info")
    });
  } }>
    yahooo!!!
  </Button>
</Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
