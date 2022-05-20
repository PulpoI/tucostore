import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import Loader from "./Loader";
import axios from "axios";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ------ bd en JSON --------- //
  useEffect(() => {
    const obtenerProductos = axios(
      "https://pulpoi.github.io/tucostore/src/utils/bd-tuco-store.json"
    ).then((res) => res);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    if (!categoria) {
      obtenerProductos.then((res) => setProductos(res.data));
    } else {
      obtenerProductos.then((res) => {
        setProductos(
          res.data.filter((productos) => productos.category === categoria)
        );
      });
    }
  }, [categoria]);

  // ------ bd en FIREBASE --------- //
  // useEffect(() => {
  //   // const getData = async () => {
  // const query = collection(db, "items");
  // const response = await getDocs(query).finally(() => setLoading(false));
  // const dataItems = response.docs.map((doc) => {
  //   return { id: doc.id, ...doc.data() };
  // });
  // setProductos(
  //   dataItems.filter((productos) => productos.category === categoria)
  // );
  // };
  // getData();
  // }, [categoria]);

  return <>{loading ? <Loader /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
