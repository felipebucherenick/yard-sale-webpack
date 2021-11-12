import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShopingCart from '@icons/icon_shopping_cart.svg';
import downArrow from '@icons/down-arrow.png';
import HomeMenu from '@components/HomeMenu';
import AppContext from '@context/AppContext';
import ShoppingCart from '@containers/ShoppingCart';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleShoppingCart = () => {
    setToggleShoppingCart(!toggle);
  };

  return (
    <header className="Header">
      <img src={iconMenu} alt="Menu" className="mobile-menu" />
      <div className="nav-bar__left">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Forniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="nav-bar__right">
        <div className="email-container" onClick={handleToggle}>
          <p className="email">camilayokoo@gmail.com</p>
          <img src={downArrow} alt="" className="down-arrow" />
        </div>
        <div className="nav-var_shoping-cart" onClick={handleToggleShoppingCart}>
          <img src={iconShopingCart} alt="Carrito de compras" />
          {state.cart.length > 0 ? (
            <div className="shoping-cart__counter">{state.cart.length}</div>
          ) : null}
        </div>
      </div>
      {toggle && <HomeMenu />}
      {toggleShoppingCart && <ShoppingCart />}
    </header>
  );
};

export default Header;
