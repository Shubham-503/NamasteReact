import {  createContext } from "react";

export const initialState = {
  items: [],
  total: 0,
};

const CartContext = createContext(initialState);

export default CartContext;
