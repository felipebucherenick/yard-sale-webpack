import React, { useState, useContext } from 'react';

import AppContext from '@context/AppContext';

import ShoppingCart from '@containers/ShoppingCart';
import NavBar from '@components/NavBar';
import Menu from '@components/Menu';
import HomeMenu from '@components/HomeMenu';

import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShopingCart from '@icons/icon_shopping_cart.svg';
import downArrow from '@icons/down-arrow.png';

import '@styles/Header.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleHomeMenu, setToggleHomeMenu] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleHomeMenu = () => {
    setToggleHomeMenu(!toggleHomeMenu);
  };

  const handleToggleShoppingCart = () => {
    setToggleShoppingCart(!toggleShoppingCart);
  };

  return (
    <header className="Header">
      <img src={iconMenu} alt="Menu" className="Header__mobile-menu" onClick={handleToggleMenu} />
      <img src={logo} alt="Logo" className="Header__logo" />
      <NavBar />
      <div className="Header__right">
        <div className="email-container" onClick={handleToggleHomeMenu}>
          <p className="email">camilayokoo@gmail.com</p>
          <img src={downArrow} alt="" className="down-arrow" />
        </div>
        <div className="Header__shoping-cart" onClick={handleToggleShoppingCart}>
          <img src={iconShopingCart} alt="Carrito de compras" />
          {state.cart.length > 0 ? (
            <div className="shoping-cart__counter">{state.cart.length}</div>
          ) : null}
        </div>
      </div>
      {toggleMenu && <Menu />}
      {toggleHomeMenu && <HomeMenu />}
      {toggleShoppingCart && <ShoppingCart />}
    </header>
  );
};

export default Header;
