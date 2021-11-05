import React from 'react';
import '@styles/Header.scss';

import iconMenu from '@icons/icon_menu.svg';
import logo from'@logos/logo_yard_sale.svg';
import iconShopingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <header className='Header'>
        <img src={iconMenu} alt="Menu" className="mobile-menu"/>
        <div className="nav-bar__left">
            <img src={logo} alt="Logo" className="logo"/>
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
            <img src={iconShopingCart} alt="Carrito de compras" className="cart"/>
        </div>
    </header>
    );
}

export default Header;