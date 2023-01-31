import React from "react";
import CartContext from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = item => {
    dispatch({type:"REMOVE_ITEM",item})
  }
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} ({item.price})
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {state.total}</p>
      <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

export default Cart;
