import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const CartList = () => {
  const { cartList, totalBuy, removeItem, emptyCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row mt-4 justify-content-center text-center">
        <div className="col-lg-3 col-sm-3"></div>
        <h5 className="col-lg-3 col-sm-3">Nombre:</h5>
        <h5 className="col-lg-2 col-sm-2">Precio:</h5>
        <h5 className="col-lg-1 col-sm-1">Cantidad:</h5>
        <h5 className="col-lg-2 col-sm-2">Total:</h5>
        <div className="col-lg-1 col-sm-1"></div>
      </div>
      <hr></hr>
      <div className="row justify-content-center text-center">
        {cartList.map((prod) => (
          <div className="row align-items-center" key={prod.id}>
            <div className="col-lg-3 col-sm-3">
              <Link to={`/detail/${prod.id}`}>
                <img
                  src={prod.img}
                  alt={prod.title}
                  style={{ width: 150 }}
                ></img>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-3">
              <Link to={`/detail/${prod.id}`}>
                <h5>
                  {prod.product.charAt(0).toUpperCase()}
                  {prod.product.slice(1)}: {prod.title}
                </h5>
              </Link>
            </div>
            <div className="col-lg-2 col-sm-2">
              <h5>${prod.price}</h5>
            </div>
            <div className="col-lg-1 col-sm-1">
              <h5>{prod.quantity}</h5>
            </div>
            <div className="col-lg-2 col-sm-2">
              <h5>${prod.quantity * prod.price}</h5>
            </div>
            <div className="col-lg-1 col-sm-1">
              <button
                className="btn btn-danger bg-gradient"
                onClick={() => removeItem(prod.id)}
              >
                Eliminar{" "}
              </button>
            </div>
            <hr></hr>
          </div>
        ))}
        <h3>
          <b>Precio Total:</b>
        </h3>
        <h4 className="text-center">
          <b>${totalBuy()}</b>
        </h4>
        <div className="d-flex justify-content-center mt-5">
          <button
            className="btn btn-danger bg-gradient me-3"
            onClick={emptyCart}
          >
            Vaciar Carrito
          </button>
          <Link to="/checkout">
            <button className="btn btn-danger bg-gradient ms-3">
              Procesar Compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;
