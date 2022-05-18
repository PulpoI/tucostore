import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import Loader from "./Loader";
import Footer from "./Footer";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);

      const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducto(dataItems.find((e) => e.id === itemId));
      setLoading(false);
    };
    getData();
  }, [itemId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          <ItemDetail item={producto} descriptionProduct={producto.product} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
