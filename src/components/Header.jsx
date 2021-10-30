import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
        <img src="./assets/icons/icon_menu.svg" alt="Menu" className="mobile-menu"/>
        <div className="nav-bar__left">
            <img src="./assets/logos/logo_yard_sale.svg" alt="Logo" className="logo"/>
            <ul>
                <li><a href="/">All</a></li>
                <li><a href="/">Clothes</a></li>
                <li><a href="/">Electronics</a></li>
                <li><a href="/">Forniture</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Others</a></li>
            </ul>
        </div>
        <div className="nav-bar__right">
            <p className="email">camilayokoo@gmail.com</p>
            <img src="./assets/icons/icon_shopping_cart.svg" alt="Carrito de compras" className="cart"/>
        </div>
    </nav>
    );
}

export default Header;