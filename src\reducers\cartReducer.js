const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_SUCCESS':
      return { ...state, cart: action.cart };
    case 'ADD_ITEM_SUCCESS':
      return { ...state, cart: [...state.cart, action.item] };
    case 'REMOVE_ITEM_SUCCESS':
      return { ...state, cart: state.cart.filter(item => item.id !== action.id) };
    default:
      return state;
  }
};

export default cartReducer;