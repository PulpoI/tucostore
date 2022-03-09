import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

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
      <div>CANTIDAD: {count}</div>
      <IconButton onClick={countUp} aria-label="add" color="primary">
        <AddCircleIcon />
      </IconButton>
    </>
  );
}
