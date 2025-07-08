import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCart from '../components/ShoppingCart';

const ShoppingCartPage = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('/api/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default ShoppingCartPage;