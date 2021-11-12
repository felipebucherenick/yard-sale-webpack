import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/ShoppingCart.scss';

const ShoppingCart = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="ShoppingCart">
      <section className="ShoppingCart-container">
        <h1 className="ShoppingCart_title">Shopping cart</h1>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div className="ShoppingCart_total-details">
          <p>Total</p>
          <p className="total">$500.00</p>
        </div>
        <button className="primary-button login-button">Checkout</button>
      </section>
    </div>
  );
};

export default ShoppingCart;
