import React from "react";
import ItemCount from "./ItemCount";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  return <ItemCount initial={1} stock={5} />;
};

export default ItemListContainer;
