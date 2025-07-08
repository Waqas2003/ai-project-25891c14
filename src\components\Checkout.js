import React from 'react';

const Checkout = ({ order }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default Checkout;