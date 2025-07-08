const initialState = {
  orders: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDERS_SUCCESS':
      return { ...state, orders: action.orders };
    case 'CREATE_ORDER_SUCCESS':
      return { ...state, orders: [...state.orders, action.order] };
    case 'UPDATE_ORDER_SUCCESS':
      return { ...state, orders: state.orders.map(order => order.id === action.order.id ? action.order : order) };
    case 'DELETE_ORDER_SUCCESS':
      return { ...state, orders: state.orders.filter(order => order.id !== action.id) };
    default:
      return state;
  }
};

export default orderReducer;
```

This is a basic ecommerce website using React, Redux, and React Router. It includes user authentication, product listing and filtering, product details page, shopping cart and checkout, order management, and admin dashboard.