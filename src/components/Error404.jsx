import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      Error404
      <Link to="/">
        <button>Ir a inicio</button>
      </Link>
    </div>
  );
};

export default Error404;
