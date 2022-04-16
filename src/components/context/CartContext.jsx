import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldItem = cartList[index].quantity;
      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...item, quantity: item.quantity + oldItem },
      ]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  const removeItem = (id) => {
    const filteredCart = cartList.filter((item) => item.id !== id);
    setCartList(filteredCart);
  };

  // const sumItem = () => {
  //   const sum = cartList[0].quantity + 1;
  //   setCartList(sum);
  // };

  function emptyCart() {
    setCartList([]);
  }

  // Contador carrito
  const cartCounter = () => {
    return cartList.reduce((prev, prod) => prev + prod.quantity, 0);
  };
  // Subtotal compra
  const totalBuy = () => {
    return cartList.reduce(
      (prev, prod) => prev + prod.quantity * prod.price,
      0
    );
  };

  const upperStart = (e) => {
    const upper = e.charAt(0).toUpperCase();
    console.log(upper);
    upper.slice(1);
    console.log(upper);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        emptyCart,
        cartCounter,
        totalBuy,
        upperStart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
