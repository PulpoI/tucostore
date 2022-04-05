import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const [goToCart, setGoToCart] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      count,
    };
    console.log(itemToCart);
  };

  return (
    <div className="CardDetail">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Categoria: {item.categoria}</Card.Text>
        </Card.Body>
        <ItemCount
          stock={5}
          count={count}
          setCount={setCount}
          handleAgregar={handleAgregar}
        />
      </Card>
    </div>
  );
};

export default ItemDetail;
