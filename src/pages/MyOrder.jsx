import React from 'react';
import '../styles/MyOrder.scss'

const MyOrder = () => {
    return (
        <div className="my-order">
        <section className="my-order-container">
            <h1 className="title">My Order</h1>

            <div className="my-order_total">
                <div className="total-details">
                    <p className="total-date">04.25.2021</p>
                    <p className="total-amount">6 articles</p>
                </div>
                <p className="total-price">$560,00</p>
            </div>

            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>
            <div className="my-order_item">
                <div className="item-details">
                    <img src="./assets/pictures/bike.jpg" alt="Bike"/>
                    <p>Bicicleta</p>
                </div>
                <p className="item-price">$120,00</p>
            </div>

        </section>
    </div>
    );
}

export default MyOrder;