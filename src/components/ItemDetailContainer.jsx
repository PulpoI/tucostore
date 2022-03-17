import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ categoria, id }) {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    axios(`http://localhost:5000/memes/${getRandomArbitrary(1, 108)}`).then(
      (res) => setItem(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [categoria, id]);
  return <div>{isLoading ? "Cargando..." : <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
