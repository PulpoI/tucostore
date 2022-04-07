import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { CartContext } from "../components/context/CartContext";

const CartWidget = () => {
  const { cartList, cartCounter } = useContext(CartContext);
  return (
    <>
      <FaShoppingCart size="2rem" color="white" className="position-relative" />
      {cartList.length === 0 ? (
        <span></span>
      ) : (
        <Badge pill bg="danger">
          {cartCounter()}
        </Badge>
      )}
    </>
  );
};

export default CartWidget;
