const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, products: action.products };
    case 'CREATE_PRODUCT_SUCCESS':
      return { ...state, products: [...state.products, action.product] };
    case 'UPDATE_PRODUCT_SUCCESS':
      return { ...state, products: state.products.map(product => product.id === action.product.id ? action.product : product) };
    case 'DELETE_PRODUCT_SUCCESS':
      return { ...state, products: state.products.filter(product => product.id !== action.id) };
    default:
      return state;
  }
};

export default productReducer;