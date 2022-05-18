import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

import "./ItemDetail.css";

const ItemDetail = ({ item, descriptionProduct }) => {
  const [goToCart, setGoToCart] = useState(false);
  const [color, setColor] = useState(item.img);

  const colorWhite = () => {
    setColor(item.imgColor.imgWhite);
  };
  const colorBlack = () => {
    setColor(item.imgColor.imgBlack);
  };
  const colorGray = () => {
    setColor(item.imgColor.imgGray);
  };

  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart({ ...item, quantity: quantity });
  };
  const descripcionSticker = "Stickers";
  const descripcionRemera =
    "Todas las Remeras son de algodón peinado 24.1 y las estampas con Vinilo, Transfer y Poliamida. Utilizamos prendas y materiales de primera calidad para garantizar la durabilidad y comodidad.";

  //Descripciones de productos
  switch (descriptionProduct) {
    case "remera":
      descriptionProduct = descripcionRemera;
      break;
    case "sticker":
      descriptionProduct = descripcionSticker;
      break;
    default:
      break;
  }

  return (
    <div className="container-fluid container-detail d-flex align-content-center align-items-center">
      <div className="col-6">
        <img
          className="img-thumbnail img-detail"
          src={color}
          alt={item.title}
        />
      </div>

      <div className="col-6 d-flex row p-3 align-items-start">
        <Link to={`/remeras/${item.category}`}>
          <Button className="btn m-2 btn-warning bg-gradient mt-2">
            Volver{" "}
          </Button>
        </Link>
        <h2 className="text-center mb-5">{item.title}</h2>
        <h4>${item.price}</h4>
        <h5>
          Categoria:{" "}
          <Link
            style={{ textTransform: "uppercase" }}
            to={`/remeras/${item.category}`}
          >
            {item.category}
          </Link>{" "}
        </h5>
        <p>{descriptionProduct}</p>
        <div className="d-flex flex-column align-content-center align-items-center btn-colors">
          <h5 className="text-center">Colores</h5>
          <div>
            <input
              className="btn btn-black"
              type="button"
              value="Negro"
              onClick={colorBlack}
              disabled={
                item.imgColor.imgBlack === item.imgColor.imgGray ||
                item.imgColor.imgBlack === item.imgColor.imgWhite
              }
            />

            <input
              className="btn btn-white"
              type="button"
              value="Blanco"
              onClick={colorWhite}
              disabled={
                item.imgColor.imgWhite === item.imgColor.imgGray ||
                item.imgColor.imgWhite === item.imgColor.imgBlack
              }
            />
            <input
              className="btn btn-gray"
              type="button"
              value="Gris"
              onClick={colorGray}
              disabled={
                item.imgColor.imgGray === item.imgColor.imgWhite ||
                item.imgColor.imgGray === item.imgColor.imgBlack
              }
            />
          </div>
        </div>

        {!goToCart ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <div className="d-flex justify-content-around m-2">
            <Link to={`/cart`}>
              <Button className="btn m-2 btn-warning bg-gradient mt-2">
                Ir al carrito
              </Button>
            </Link>
            <Link to={`/remeras/${item.category}`}>
              <Button className="btn m-2 btn-warning bg-gradient mt-2">
                Seguir comprando
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
