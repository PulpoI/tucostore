import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Button } from "@mui/material";

export default function ItemCount({ stock, count, setCount, handleAgregar }) {
  const countUp = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <IconButton onClick={countDown} aria-label="delete" color="primary">
        <RemoveCircleIcon />
      </IconButton>
      Cantidad: {count}
      <IconButton onClick={countUp} aria-label="add" color="primary">
        <AddCircleIcon />
      </IconButton>
      <Button variant="primary" onClick={handleAgregar}>
        Agregar al carrito
      </Button>
    </>
  );
}
