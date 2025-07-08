import React from 'react';

const AdminDashboard = ({ products, orders }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;