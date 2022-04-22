import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart({ ...item, quantity: quantity });
  };

  return (
    <div className="container d-flex text-center justify-content-center align-items-baseline">
      <div>
        <img className="w-50 mt-3" src={item.img} alt={item.title} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <h4>${item.price}</h4>
        <h5>
          Categoria:{" "}
          <Link
            style={{ textTransform: "uppercase" }}
            to={`/remeras/${item.category}`}
          >
            {item.category}
          </Link>{" "}
        </h5>
        {!goToCart ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <div className="d-flex justify-content-around m-2">
            <Link to={`/cart`}>
              <Button className="btn m-2 btn-warning bg-gradient mt-2">
                Ir al carrito
              </Button>
            </Link>
            <Link to={`/remeras/${item.category}`}>
              <Button className="btn m-2 btn-warning bg-gradient mt-2">
                Seguir comprando
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
