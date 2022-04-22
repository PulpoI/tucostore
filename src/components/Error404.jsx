import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2>NO SE ENCONTRO LA PAGINA :( </h2>
      <Link to="/">
        <Button variant="warning">Ir a inicio</Button>
      </Link>
    </div>
  );
};

export default Error404;
