import React from "react";
import ItemCount from "./ItemCount";
import { Button } from "@mui/material";
import ItemList from "./ItemList";

const ItemListContainer = ({ card }) => {
  return (
    <>
      <ItemList card={card} />
      <ItemCount initial={1} stock={5} />
    </>
  );
};

export default ItemListContainer;
