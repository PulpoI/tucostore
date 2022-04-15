import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../utils/firebase";
import { CartContext } from "./context/CartContext";

const FormBuyer = () => {
  const { cartList, totalBuy } = useContext(CartContext);

  const sendOrder = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    //objeto con info del comprador y su orden
    const newOrder = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cartList,
      date: Timestamp.fromDate(new Date()),
      total: totalBuy(),
    };
    console.log(newOrder);

    // referencia de la collecion
    const ordersCollection = collection(db, "orders");
    // crear nuevo documento
    const docReference = await addDoc(ordersCollection, newOrder);
    console.log(docReference);
  };

  return (
    <div>
      <form onSubmit={sendOrder}>
        <input type="text" placeholder="Nombre" />
        <input type="phone" placeholder="Telefono" />
        <input type="email" placeholder="Email" />
        <button type="submit">Realizar compra</button>
      </form>
    </div>
  );
};

export default FormBuyer;
