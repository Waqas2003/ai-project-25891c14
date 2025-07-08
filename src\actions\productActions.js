import api from '../api';

const productActions = {
  getProducts: () => {
    return api.get('/products');
  },
  getProduct: (id) => {
    return api.get(`/products/${id}`);
  },
  createProduct: (product) => {
    return api.post('/products', product);
  },
  updateProduct: (id, product) => {
    return api.put(`/products/${id}`, product);
  },
  deleteProduct: (id) => {
    return api.delete(`/products/${id}`);
  }
};

export default productActions;