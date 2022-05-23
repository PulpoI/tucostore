import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import Loader from "./Loader";
import axios from "axios";

function ItemDetailContainer({ product, displayNone }) {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  // ------ bd en JSON --------- //
  useEffect(() => {
    const obtenerProductos = axios(product).then((res) => res);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    obtenerProductos.then((res) => {
      setProducto(res.data.find((e) => e.id == itemId));
    });
  }, [itemId]);

  // ------ bd en FIREBASE --------- //
  // useEffect(() => {
  //   const getData = async () => {
  //     const query = collection(db, "items");
  //     const response = await getDocs(query);

  //     const dataItems = response.docs.map((doc) => {
  //       return { id: doc.id, ...doc.data() };
  //     });
  //     setProducto(dataItems.find((e) => e.id === itemId));
  //     setLoading(false);
  //   };
  //   getData();
  // }, [itemId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          <ItemDetail
            item={producto}
            descriptionProduct={producto.product}
            displayNone={displayNone}
          />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
