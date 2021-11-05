import React from 'react';
import '@styles/ProductItem.scss';

import bike from '@pictures/bike.jpg';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
    return (
        <div className="ProductItem">
                <img src={bike} alt="Bicicleta"/>
                <div className="product-content">
                    <div className="product-details">
                        <p>$120,00</p>
                        <p>Bicicleta</p>
                    </div>
                    <figure className="add-to-cart">
                        <img src={addCart} alt="Icono para agregar al carrito"/>
                    </figure>
                </div>
            </div>
    );
}

export default ProductItem;