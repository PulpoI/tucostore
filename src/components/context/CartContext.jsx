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

  function emptyCart() {
    setCartList([]);
    limpiarLs();
  }

  // Contador carrito
  const cartCounter = () => {
    addLocalStorage();
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

  //Guardando el carrito en el LS
  function addLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(cartList));
  }

  window.onload = function () {
    const cartList = JSON.parse(localStorage.getItem("carrito"));
    if (cartList) {
      setCartList(cartList);
    }
  };

  function limpiarLs() {
    addLocalStorage(cartList);
    localStorage.clear();
  }

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