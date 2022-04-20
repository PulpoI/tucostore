import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";
import Loader from "./Loader";

const ItemList = ({ productos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const itemsPorPagina = 16;

  const productosFiltrados = () => {
    if (search.length === 0) {
      return productos.slice(currentPage, currentPage + itemsPorPagina);
    } else {
      return filtered.slice(currentPage, currentPage + itemsPorPagina);
    }
  };

  const filtered = productos.filter((producto) =>
    producto.title.toUpperCase().includes(search)
  );

  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    if (filtered.length > currentPage + itemsPorPagina)
      setCurrentPage(currentPage + itemsPorPagina);
    irArriba();
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - itemsPorPagina);
    irArriba();
  };

  const onSearchChange = (event) => {
    setCurrentPage(0);
    setSearch(event.target.value.toUpperCase());
  };

  const removeSearch = () => {
    setSearch("");
  };
  useEffect(() => {
    setCurrentPage(0);
    setLoading(false);
  }, [productos]);

  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar Diseño"
        aria-label="Search"
        value={search}
        onChange={onSearchChange}
      />
      <button className="btn btn-remove" onClick={removeSearch}>
        BORRAR
      </button>
      <button onClick={prevPage}>ANTERIOR</button>
      <hr />
      <button onClick={nextPage}>SIGUIENTE</button>
      <div className="GridCards">
        {loading ? (
          <Loader />
        ) : (
          productosFiltrados().map((producto) => (
            <Item producto={producto} key={producto.id} />
          ))
        )}
      </div>
      <button onClick={prevPage}>ANTERIOR</button>
      <hr />
      <button onClick={nextPage}>SIGUIENTE</button>
    </>
  );
};

export default ItemList;
