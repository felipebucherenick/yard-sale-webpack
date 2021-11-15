import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/ShoppingCart.scss';

const ShoppingCart = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="ShoppingCart">
      <section className="ShoppingCart-container">
        <h1 className="ShoppingCart_title">Shopping cart</h1>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div className="ShoppingCart_total-details">
          <p>Total</p>
          <p className="total">${sumTotal()}</p>
        </div>
        <button className="primary-button login-button">Checkout</button>
      </section>
    </div>
  );
};

export default ShoppingCart;
