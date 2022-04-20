import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Item.css";

import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const titulo = producto.title.toUpperCase().split(" ");

  return (
    <Link className="Card text-center" to={`/detail/${producto.id}`}>
      <Card style={{ width: "16rem" }}>
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

          <Card.Footer style={{ backgroundColor: "black", color: "yellow" }}>
            Ver detalles
          </Card.Footer>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
