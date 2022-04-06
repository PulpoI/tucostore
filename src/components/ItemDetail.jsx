import { Button } from "@mui/material";
import { Card } from "react-bootstrap";

import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);

  // const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart({ ...item, quantity: quantity });
  };

  return (
    <div className="CardDetail">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Categoria: {item.categoria}</Card.Text>
        </Card.Body>

        {!goToCart ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <div className="d-flex justify-content-center">
            <Link to={`/cart`}>
              <Button variant="primary">Ir al carrito</Button>
            </Link>
            <Link to={`/`}>
              <Button variant="primary">Seguir comprando</Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
