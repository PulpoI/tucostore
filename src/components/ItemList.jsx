import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import Loader from "./Loader";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./ItemList.css";
import { Button } from "react-bootstrap";
import Main from "./Main";

import foto1 from "../assets/image_11.jpg";
import foto2 from "../assets/image_22.jpg";
import foto3 from "../assets/image_44.jpg";
import Footer from "./Footer";
import { CartContext } from "./context/CartContext";

const ItemList = ({ productos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [numPagina, setNumPagina] = useState(1);
  const { irArriba } = useContext(CartContext);

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

  const nextPage = () => {
    if (filtered.length > currentPage + itemsPorPagina)
      setCurrentPage(currentPage + itemsPorPagina);
    setNumPagina(numPagina + 1);
    irArriba();
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - itemsPorPagina);
      setNumPagina(numPagina - 1);
    }

    irArriba();
  };

  const onSearchChange = (event) => {
    setCurrentPage(0);
    setSearch(event.target.value.toUpperCase());
  };

  const removeSearch = () => {
    setSearch("");
    setNumPagina(1);
  };
  useEffect(() => {
    setCurrentPage(0);
    setNumPagina(1);
    setLoading(false);
  }, [productos]);

  return (
    <>
      <Main className="main-img" foto1={foto1} foto2={foto2} foto3={foto3} />
      <div className="m-2 sticky-top d-flex">
        <input
          className="form-control"
          type="search"
          placeholder={"Buscar en esta categoría"}
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
      <div className="container mt-5  d-flex align-items-baseline  justify-content-evenly">
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
        <h5 className="text-center">Página {numPagina}</h5>
        <Button
          className="btn-pag d-flex justify-content-evenly"
          variant="warning"
          disabled={filtered.length < currentPage + 21}
          onClick={nextPage}
        >
          <div>SIGUIENTE</div>
          <div>
            <BsArrowRightCircle />
          </div>
        </Button>
      </div>
      <div className="d-flex flex-column text-center mt-5">
        <h3>¿No te gusta ninguo?</h3>
        <a
          href="https://creador.tucoremeras.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>¡CREALO!</h2>
        </a>
        <p>
          Crea tu estilo usando el <br />{" "}
          <a
            href="https://creador.tucoremeras.com.ar/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="warning">CREADOR </Button>{" "}
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ItemList;
