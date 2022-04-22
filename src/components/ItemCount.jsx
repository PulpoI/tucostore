import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { Button } from "react-bootstrap";

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
      <div className="container justify-content-center align-items-baseline d-flex">
        <Button
          onClick={countDown}
          aria-label="delete"
          className="btn btn-warning bg-gradient mt-2 m-2"
        >
          <BsArrowDownCircle />
        </Button>
        <h5>Cantidad: {value}</h5>
        <Button
          className="btn btn-warning bg-gradient mt-2 m-2"
          onClick={countUp}
          aria-label="add"
        >
          <BsArrowUpCircle />
        </Button>
        <Button
          className="btn btn-warning bg-gradient mt-2"
          onClick={() => onAdd(value)}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
