import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.post('/api/orders')
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <Checkout order={order} />
    </div>
  );
};

export default CheckoutPage;