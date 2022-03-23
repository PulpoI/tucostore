import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = axios(`http://localhost:5000/remeras`).then(
      (res) => res
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    obtenerProductos.then((res) => {
      setProducto(res.data.find((e) => e.id == itemId));
    });
  }, []);

  return (
    <div>{isLoading ? "Cargando..." : <ItemDetail item={producto} />}</div>
  );
}

export default ItemDetailContainer;
