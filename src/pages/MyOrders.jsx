import React from 'react';
import Order from '../components/Order';
import '@styles/MyOrders.scss';

const MyOrders = () => {
    return (
        <div className="MyOrders">
        <section className="my-orders-container">

            <h1 className="title">My Orders</h1>

            <Order/>
        
        </section>
    </div>
    );
}

export default MyOrders;