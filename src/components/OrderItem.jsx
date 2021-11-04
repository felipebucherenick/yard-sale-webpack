import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="OrderItem">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
    );
}

export default OrderItem;