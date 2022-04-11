import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);

  // useEffect(() => {
  //   const obtenerProductos = axios(`http://localhost:5000/remeras`).then(
  //     (res) => res
  //   );
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   obtenerProductos.then((res) => {
  //     setProducto(res.data.find((e) => e.id == itemId));
  //   });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);

      const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducto(dataItems.find((e) => e.id == itemId));
    };
    getData();
  }, []);

  return (
    <div>
      {" "}
      <ItemDetail item={producto} />
    </div>
  );
}

export default ItemDetailContainer;
