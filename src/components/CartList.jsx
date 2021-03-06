import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./CartList.css";

const CartList = () => {
  const { cartList, totalBuy, removeItem, emptyCart, irArriba } =
    useContext(CartContext);

  return (
    <>
      <div className="container cartList">
        <div className="row mt-3 tabla justify-content-center text-center">
          <div className="col-lg-3 col-sm-2"></div>
          <h5 className="col-lg-4 col-sm-2">Producto:</h5>
          <h5 className="col-lg-1 col-sm-2">Precio:</h5>
          <h5 className="col-lg-1 col-sm-2">Cantidad:</h5>
          <h5 className="col-lg-2 col-sm-2">Subtotal:</h5>
          <div className="col-lg-1 col-sm-2"></div>
        </div>
        <hr></hr>
        <div className="row justify-content-center text-center">
          {cartList.map((prod) => (
            <div className="row align-items-center" key={prod.id}>
              <div className="col-lg-3 div-img col-sm-2">
                <Link onClick={irArriba} to={`/${prod.product}/${prod.id}`}>
                  <img
                    className="img-cart"
                    src={prod.img}
                    alt={prod.title}
                  ></img>
                </Link>
              </div>
              <div className="px-0 col-lg-4 col-sm-2">
                <Link onClick={irArriba} to={`/${prod.product}/${prod.id}`}>
                  <h5>
                    {prod.product.charAt(0).toUpperCase()}
                    {prod.product.slice(1)}:
                  </h5>
                  <h5>"{prod.title.substring(0, prod.title.length - 1)}"</h5>
                </Link>
              </div>
              <div className="col-lg-1 precio col-sm-2">
                <h5>${prod.price}</h5>
              </div>
              <div className="col-lg-1 col-sm-2">
                <h5>{prod.quantity}</h5>
              </div>
              <div className="col-lg-2 col-sm-2">
                <h5>${prod.quantity * prod.price}</h5>
              </div>
              <div className="col-lg-1 col-sm-2">
                <button
                  className="btn btn-warning bg-gradient"
                  onClick={() => removeItem(prod.id)}
                >
                  Eliminar{" "}
                </button>
              </div>
              <hr className="mb-1"></hr>
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
              className="btn btn-warning bg-gradient me-3"
              onClick={emptyCart}
            >
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-warning bg-gradient ms-3">
                Procesar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartList;
