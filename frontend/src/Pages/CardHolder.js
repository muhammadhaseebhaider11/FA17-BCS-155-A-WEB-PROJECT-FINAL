/** @format */

import React from "react";
import { Card, Button } from "react-bootstrap";
import {addToBucket} from '../actions/bucketActions'
export default ({ menue,dispatch }) => {
 

  let {name, price} = menue;

  
  return (
    <div className="m-4">
      <Card bg="Secondary" border="dark" style={{ width: "18rem" }}>
       
        <Card.Body>
        <Card.Img variant="top" src="https://www.supermeal.pk/ext-resources/cropped-images/000/062/000062638_deals-3.jpg" />
          <Card.Title className="text-center"><h3>{name}</h3></Card.Title>
          <Card.Text>
            <h4>Price:{price}</h4>
          </Card.Text>

          <Button
            variant="outline-dark" size="lg" block
            onClick={() => {
           dispatch(addToBucket(menue));
          
            }}
          >
            Add to Bucket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
