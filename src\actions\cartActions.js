import api from '../api';

const cartActions = {
  getCart: () => {
    return api.get('/cart');
  },
  addItem: (item) => {
    return api.post('/cart', item);
  },
  removeItem: (id) => {
    return api.delete(`/cart/${id}`);
  }
};

export default cartActions;