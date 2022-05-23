import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  const titulo = producto.title.toUpperCase().split(" ");

  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      onClick={irArriba}
      className="Card text-center"
      to={`/${producto.product}/${producto.id}`}
    >
      <Card>
        <Card.Img className="ImgCard" variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title as={"h6"}>
            {titulo[0]} {titulo[1]} {titulo[2]} {titulo[3]} {titulo[4]}{" "}
            {titulo[5]} {titulo[6]} {titulo[7]}
          </Card.Title>
          <Card.Subtitle>
            Categoría: {producto.category.toUpperCase()}
          </Card.Subtitle>
          <Card.Text>Precio: ${producto.price}</Card.Text>

          <Card.Footer className="btn-warning">Ver detalles</Card.Footer>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
