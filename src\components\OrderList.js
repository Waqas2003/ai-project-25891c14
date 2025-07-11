import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <ul>
      {orders.map(order => (
        <li key={order.id}>
          Order #{order.id} - {order.status}
        </li>
      ))}
    </ul>
  );
};

export default OrderList;