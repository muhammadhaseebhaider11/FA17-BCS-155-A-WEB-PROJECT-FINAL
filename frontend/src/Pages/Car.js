import React from "react";
import { Carousel } from "react-bootstrap";
function Car() {
  return (
    <div>
      <Carousel className="car">
        <Carousel.Item>
          <img className="d-block w-100" src="./images/f1.png" alt="Deal 1" />
          <Carousel.Caption>
            <h3>Deal 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./images/f2.png" alt="Deal 2" />

          <Carousel.Caption>
            <h3>Deal 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./images/f3.png" alt="Deal 3" />

          <Carousel.Caption>
            <h3>Deal 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Car;
