import React from 'react';
import '@styles/OrderItem.scss';

import bike from '@pictures/bike.jpg';

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <div className="OrderItem__item-details">
        <img src={bike} alt="Bike" />
        <p>Bicicleta</p>
      </div>
      <p className="item-price">$120,00</p>
    </div>
  );
};

export default OrderItem;
