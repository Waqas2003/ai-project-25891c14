import api from '../api';

const orderActions = {
  getOrders: () => {
    return api.get('/orders');
  },
  createOrder: (order) => {
    return api.post('/orders', order);
  },
  updateOrder: (id, order) => {
    return api.put(`/orders/${id}`, order);
  },
  deleteOrder: (id) => {
    return api.delete(`/orders/${id}`);
  }
};

export default orderActions;