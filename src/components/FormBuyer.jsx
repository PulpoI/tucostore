import {
  getFirestore,
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
import CartList from "./CartList";
import { CartContext } from "./context/CartContext";
import Loader from "./Loader";

const FormBuyer = () => {
  const { cartList, totalBuy, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    setCreatingOrder(true);

    delete formData.emailConfirm;

    //objeto con info del comprador y su orden
    const newOrder = {
      buyer: formData,
      date: Timestamp.fromDate(new Date()),
      items: cartList,
      total: totalBuy(),
    };
    console.log(newOrder);

    // referencia de la collecion

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, newOrder)
      .then((resp) => setOrderId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setCreatingOrder(false);
        emptyCart();
        setFormData({ name: "", email: "", emailConfirm: "", phone: "" });
      });
  };

  return (
    <>
      {creatingOrder ? (
        <>
          <h4 className="mt-5 text-center">
            Procesando su orden, espere un momento...
          </h4>
          <Loader />
        </>
      ) : orderId ? (
        <div className="container">
          <div className="py-5 text-center mt-5">
            <h2 className="mt-5">¡Gracias por elegirnos!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <strong>El ID de tu compra es {orderId}</strong>
            <br />
            <Link className="btn btn-danger bg-gradient mt-5" to={`/`}>
              <strong>Volver al inicio</strong>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={sendOrder} onChange={handleChange}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              defaultValue={formData.name}
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="Telefono"
              defaultValue={formData.phone}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={formData.email}
              required
            />
            <input
              type="email"
              name="emailConfirm"
              placeholder="Confirmar Email"
              defaultValue={formData.emailConfirm}
              required
            />
            <button
              disabled={
                !formData.name ||
                !formData.phone ||
                !formData.email ||
                formData.email !== formData.emailConfirm ||
                cartList.length == 0
              }
            >
              Realizar compra
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default FormBuyer;
