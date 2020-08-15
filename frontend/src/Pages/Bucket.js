/** @format */

import React, { useState } from "react";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import { connect } from "react-redux";
import { clearBucket } from "../actions/bucketActions";
import N from "../Pages/N";
const BucketPage = ({ bucket, dispatch }) => {
  console.log("THE PROPS ARE", bucket);

  const [show, setShow] = useState(false);
  let total = 0;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <N />
      <OrderForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Button
        variant="outline-dark" size="lg"
        className="m-1"
        onClick={() => {
          dispatch(clearBucket());
        }}
      >
        {" "}
        Empty
      </Button>
      <Button variant="outline-dark" size="lg"  className="m-1" onClick={handleShow}>
        Order
      </Button>
      {bucket.map((single) => {
        total = total + single.price * single.qty;
        return (
          <div></div>
        );
      })}
      <h3 className="alert alert-dark">Bill = {total}/- </h3>
    </div>
  );
};

const mapStoreToState = (state) => {
  return { bucket: state.bucket };
};

export default connect(mapStoreToState)(BucketPage);
