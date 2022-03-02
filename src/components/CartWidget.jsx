import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <IconButton color="secondary" aria-label="Carrito de compras">
        <ShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default CartWidget;
