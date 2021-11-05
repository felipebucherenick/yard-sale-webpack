import React from 'react';
import '@styles/Order.scss';

import arrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <div className="item-details">
                <p className="item-date">04.25.2021</p>
                <p className="item-amount">6 articles</p>
            </div>
            <div className="item-price">
                <p>$ 120,00</p>
                <img src={arrow} alt="Ir al detalle de la orden"/>
            </div>
        </div>
    );
}

export default Order;