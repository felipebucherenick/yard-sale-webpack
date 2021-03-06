import React from 'react';
import Order from '../components/Order';
import '@styles/MyOrders.scss';

const MyOrders = () => {
  return (
    <div className="MyOrders">
      <section className="MyOrders-container">
        <h1 className="MyOrders__title">My Orders</h1>

        <Order />
      </section>
    </div>
  );
};

export default MyOrders;
