import React from "react";
import ItemCount from "./ItemCount";
import { Button } from "@mui/material";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <>
      <h2>CATEGORIA: MEMES</h2>
      <ItemList categoria={"memes"} />
      <h2>CATEGORIA: SERIES</h2>
      <ItemList categoria={"series"} />
    </>
  );
};

export default ItemListContainer;
