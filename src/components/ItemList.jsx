import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

import "./ItemList.css";

const ItemList = ({ productos }) => {
  // const getProductos = new Promise((resolve, reject) => {
  //   let condition = true;
  //   if (condition) {
  //     setTimeout(() => {
  //       resolve(memes);
  //     }, 1000);
  //   } else {
  //     reject("NO ANDA");
  //   }
  // });

  // useEffect(() => {
  //   getProductos.then((respuesta) => setListaProductos(respuesta));
  // }, []);

  return (
    <div className="GridCards">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
