import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Button } from "@mui/material";

export default function ItemCount({ initial, stock, onAdd }) {
  const [value, setValue] = useState(initial);

  const countUp = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };
  const countDown = () => {
    if (value > initial) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <IconButton onClick={countDown} aria-label="delete" color="primary">
        <RemoveCircleIcon />
      </IconButton>
      Cantidad: {value}
      <IconButton onClick={countUp} aria-label="add" color="primary">
        <AddCircleIcon />
      </IconButton>
      <Button variant="primary" onClick={() => onAdd(value)}>
        Agregar al carrito
      </Button>
    </>
  );
}
