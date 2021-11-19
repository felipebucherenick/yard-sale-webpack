import React from 'react';
import OrderItem from '../components/OrderItem';
import '@styles/MyOrder.scss';

const MyOrder = () => {
  return (
    <div className="MyOrder">
      <section className="MyOrder-container">
        <h1 className="MyOrder__title">My Order</h1>

        <div className="MyOrder_total">
          <div className="total-details">
            <p className="total-date">04.25.2021</p>
            <p className="total-amount">6 articles</p>
          </div>
          <p className="total-price">$560,00</p>
        </div>

        <OrderItem />
      </section>
    </div>
  );
};

export default MyOrder;
