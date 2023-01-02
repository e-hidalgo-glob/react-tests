import React from "react";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart } = useGlobalContext();
  return cart.length === 0 ? <EmptyCart /> : <Cart />;
};

export default CartContainer;
