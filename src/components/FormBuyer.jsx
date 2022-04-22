import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
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
            <Link className="btn btn-warning bg-gradient mt-5" to={`/`}>
              <strong>Volver al inicio</strong>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="container mt-5 form__container d-flex">
            <div className="container align-self-center position-relative">
              <div className="row">
                <div className="col-12">
                  <form
                    className="d-flex flex-column"
                    onSubmit={sendOrder}
                    onChange={handleChange}
                  >
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Nombre</label>
                      <input
                        type="name"
                        className="form-control form-control--color"
                        name="name"
                        defaultValue={formData.name}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Teléfono</label>
                      <input
                        type="number"
                        onkeydown="return event.keyCode !== 69"
                        className="form-control form-control--color"
                        name="phone"
                        defaultValue={formData.phone}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control form-control--color"
                        name="email"
                        defaultValue={formData.email}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Confirmar Email</label>
                      <input
                        type="email"
                        className="form-control form-control--color"
                        name="emailConfirm"
                        defaultValue={formData.emailConfirm}
                        required
                      />
                    </div>
                    <button
                      className="btn btn-warning bg-gradient d-flex justify-content-center w-50 align-self-center"
                      disabled={
                        !formData.name ||
                        !formData.phone ||
                        !formData.email ||
                        formData.email !== formData.emailConfirm ||
                        cartList.length === 0
                      }
                    >
                      Comprar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormBuyer;
