const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      action.item.id = state.length
      return {
        items: [...state.items, action.item],
        total: state.total + action.item.total,
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.item.id),
        total: state.total - action.item.total,
      };
    default:
      return state;
  }
};

export default cartReducer