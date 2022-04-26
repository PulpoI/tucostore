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
    <div className="d-flex flex-items-start mt-2">
      <div className="d-flex flex-column align-items-center">
        <div className=" align-items-baseline d-flex">
          <Button
            onClick={countDown}
            aria-label="delete"
            className="btn btn-sm btn-warning bg-gradient "
          >
            <BsArrowDownCircle />
          </Button>
          <h6>Cantidad: {value}</h6>
          <Button
            className="btn btn-sm btn-warning bg-gradient  "
            onClick={countUp}
            aria-label="add"
          >
            <BsArrowUpCircle />
          </Button>
        </div>
        <Button
          className="btn btn-warning bg-gradient mt-2"
          onClick={() => onAdd(value)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
