import React, { useContext } from "react";
import "./Home.css";
import Main from "../components/Main";

import foto1 from "../assets/image_1.jpg";
import foto2 from "../assets/image_2.jpg";
import foto3 from "../assets/image_4.jpg";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";

function Home() {
  const { irArriba } = useContext(CartContext);

  return (
    <div>
      <div className="main">
        <Main className="main-img" foto1={foto1} foto2={foto2} foto3={foto3} />
        <div className="mt-5 text-center">
          <h1>BIENVENIDO/A A LA TIENDA</h1>
          <h2>
            Visita nuestros diseños
            <Link onClick={irArriba} to="/remeras/tuco">
              <Button variant="warning"> Exclusivos </Button>{" "}
            </Link>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
