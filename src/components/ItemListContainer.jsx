import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { Button } from "@mui/material";
import ItemList from "./ItemList";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = axios(`http://localhost:5000/remeras`).then(
      (res) => res
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (!categoria) {
      obtenerProductos.then((res) => setProductos(res.data));
    } else {
      obtenerProductos.then((res) => {
        setProductos(
          res.data.filter((productos) => productos.categoria === categoria)
        );
      });
    }
  }, [categoria]);
  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
