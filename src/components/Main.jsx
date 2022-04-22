import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = ({ foto1, foto2, foto3 }) => {
  return (
    <>
      <Carousel controls={false} indicators={false} interval={2000} fade>
        <Carousel.Item>
          <img className="d-block w-100 " src={foto1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Main;
