import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";


export default function LoginForm({ handleShow, handleClose, show }) {
  const [cnic, setCnic] = useState("");
  
  const [password, setPassword] = useState("");
  let history=useHistory();
  function handleLogin(){
    axios({
      method: 'post', //you can set what request you want to be
      url: 'http://localhost:3030/admin-login',
      data: {cnic,password},
    }).then((res)=>{
      handleClose();
      history.push("/Adminlogin")
      localStorage.setItem("foodie_token",res.data.token)
    }).catch((e)=>{
      alert("INCORRECT! USER OR PASSWORD!")
    })
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>Only For Admin Use!!!</Modal.Body>
        <Form>
          <Form.Group controlId="formBasicAdmin">
            <Form.Label>Phone Number</Form.Label>

            <Form.Control
              type="text"
              value={cnic}
              onChange={(e) => {
                
                setCnic(e.target.value)
              }}
              placeholder="Enter Number"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"   value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} placeholder="xxxxxxx" />
          </Form.Group>

          <Button variant="primary"  onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}