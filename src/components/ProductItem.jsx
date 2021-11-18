import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-content">
        <div className="product-details">
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="add-to-cart" onClick={() => handleClick(product)}>
          <img src={addToCartIcon} alt="Icono para agregar al carrito" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
