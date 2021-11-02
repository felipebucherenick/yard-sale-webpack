import React from 'react';
import '../styles/MyOrders.scss';

const MyOrders = () => {
    return (
        <div className="my-orders">
        <section className="my-orders-container">

            <h1 className="title">My Orders</h1>

            <div className="my-orders_item">
                <div className="item-details">
                    <p className="item-date">04.25.2021</p>
                    <p className="item-amount">6 articles</p>
                </div>
                <div className="item-price">
                    <p>$ 120,00</p>
                    <img src="./assets/icons/flechita.svg" alt="Ir al detalle de la orden"/>
                </div>
            </div>
            <div className="my-orders_item">
                <div className="item-details">
                    <p className="item-date">04.25.2021</p>
                    <p className="item-amount">6 articles</p>
                </div>
                <div className="item-price">
                    <p>$ 120,00</p>
                    <img src="./assets/icons/flechita.svg" alt="Ir al detalle de la orden"/>
                </div>
            </div>
            <div className="my-orders_item">
                <div className="item-details">
                    <p className="item-date">04.25.2021</p>
                    <p className="item-amount">6 articles</p>
                </div>
                <div className="item-price">
                    <p>$ 120,00</p>
                    <img src="./assets/icons/flechita.svg" alt="Ir al detalle de la orden"/>
                </div>
            </div>
            <div className="my-orders_item">
                <div className="item-details">
                    <p className="item-date">04.25.2021</p>
                    <p className="item-amount">6 articles</p>
                </div>
                <div className="item-price">
                    <p>$ 120,00</p>
                    <img src="./assets/icons/flechita.svg" alt="Ir al detalle de la orden"/>
                </div>
            </div>
            <div className="my-orders_item">
                <div className="item-details">
                    <p className="item-date">04.25.2021</p>
                    <p className="item-amount">6 articles</p>
                </div>
                <div className="item-price">
                    <p>$ 120,00</p>
                    <img src="./assets/icons/flechita.svg" alt="Ir al detalle de la orden"/>
                </div>
            </div>


        </section>
    </div>
    );
}

export default MyOrders;