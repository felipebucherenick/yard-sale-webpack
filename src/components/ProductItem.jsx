import React from 'react';
import '../styles/ProductItem.scss'

const ProductItem = () => {
    return (
        <div className="ProductItem">
                <img src="./assets/pictures/bike.jpg" alt="Bicicleta"/>
                <div className="product-content">
                    <div className="product-details">
                        <p>$120,00</p>
                        <p>Bicicleta</p>
                    </div>
                    <figure className="add-to-cart">
                        <img src="./assets/icons/bt_add_to_cart.svg" alt="Icono para agregar al carrito"/>
                    </figure>
                </div>
            </div>
    );
}

export default ProductItem;