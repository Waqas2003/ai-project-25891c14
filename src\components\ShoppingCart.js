import React from 'react';

const ShoppingCart = ({ cart }) => {
  return (
    <ul>
      {cart.items.map(item => (
        <li key={item.id}>
          {item.name} x {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCart;