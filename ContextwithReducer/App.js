import React, { useReducer } from "react";
import Cart from "./Cart";
import CartContext, { initialState } from "./CartContext";
import cartReducer from "./cartReducer";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <h1>Hello</h1>
      <div className="cart">
        <CartContext.Provider value={{ state, dispatch }}>
          {children}
        </CartContext.Provider>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default App;
