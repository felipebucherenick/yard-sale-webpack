import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/close.png';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <div className="OrderItem__item-details">
        <img src={product.images[0]} alt={product.title} />
        <p>{product.title}</p>
      </div>
      <div className="item-price__container">
        <p className="item-price">${product.price}</p>
        <img
          src={close}
          alt="Icon delete order"
          className="OrderItem__close"
          onClick={() => handleRemove(product)}
        />
      </div>
    </div>
  );
};

export default OrderItem;
