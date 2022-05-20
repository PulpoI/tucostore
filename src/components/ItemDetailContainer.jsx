import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import Loader from "./Loader";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  // ------ bd en JSON --------- //
  // useEffect(() => {
  //   const jsonData = require("../utils/larralde.json");
  //   setProducto(jsonData);
  //   setLoading(false);
  // }, []);

  // ------ bd en FIREBASE --------- //

  useEffect(() => {
    // const getData = async () => {
    const jsonData = fetch("../utils/larralde.json").then((response) => {
      return response.json();
    });

    // const dataItems = response.map((doc) => {
    //   return { id: doc.id, ...doc };
    // });

    // console.log(dataItems);
    console.log(jsonData);

    setProducto(jsonData.find((e) => e.id === itemId));
    setLoading(false);
    // };
    // getData();
  }, [itemId]);

  console.log(producto);

  console.log(itemId);

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
          <ItemDetail item={producto} descriptionProduct={producto.product} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
