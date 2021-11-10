import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import addCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState('hola');
  const handleClick = () => {
    setCart('hola mundo');
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-content">
        <div className="product-details">
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="add-to-cart" onClick={handleClick}>
          <img src={addCart} alt="Icono para agregar al carrito" />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;
