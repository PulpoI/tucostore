import React, { useEffect, useState } from "react";
import Item from "./Item";
import Loader from "./Loader";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./ItemList.css";
import { Button } from "react-bootstrap";
import Main from "./Main";

import foto1 from "../assets/image_11.jpg";
import foto2 from "../assets/image_22.jpg";
import foto3 from "../assets/image_44.jpg";

const ItemList = ({ productos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const itemsPorPagina = 20;

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
    if (currentPage > 0) {
      setCurrentPage(currentPage - itemsPorPagina);
    }

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
      <Main className="main-img" foto1={foto1} foto2={foto2} foto3={foto3} />
      <div className="m-3 position-sticky d-flex">
        <input
          className="form-control"
          type="search"
          placeholder="Buscar Diseño"
          aria-label="Search"
          value={search}
          onChange={onSearchChange}
        />
        <Button
          variant="warning"
          className="btn btn-remove "
          onClick={removeSearch}
        >
          BORRAR
        </Button>
      </div>

      <div className="GridCards">
        {loading ? (
          <Loader />
        ) : (
          productosFiltrados().map((producto) => (
            <Item producto={producto} key={producto.id} />
          ))
        )}
      </div>
      <div className="container mt-3 mt-3 d-flex  justify-content-evenly">
        <Button
          className="btn-pag d-flex justify-content-evenly"
          variant="warning"
          disabled={currentPage === 0}
          onClick={prevPage}
        >
          <div>
            <BsArrowLeftCircle />
          </div>
          <div>ANTERIOR</div>
        </Button>

        <Button
          className="btn-pag d-flex justify-content-evenly"
          variant="warning"
          disabled={currentPage === 100}
          onClick={nextPage}
        >
          <div>SIGUIENTE</div>
          <div>
            <BsArrowRightCircle />
          </div>
        </Button>
      </div>
    </>
  );
};

export default ItemList;
