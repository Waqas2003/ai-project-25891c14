import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;