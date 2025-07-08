import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/OrderList';

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Order Management</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderManagementPage;