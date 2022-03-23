import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ item }) => {
  return (
    <div className="CardDetail">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Categoria: {item.categoria}</Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
        <ItemCount initial={1} stock={5} />
      </Card>
    </div>
  );
};

export default ItemDetail;
