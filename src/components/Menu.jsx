import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="categories">
        <li>
          <a href="/" className="title">
            CATEGORIES
          </a>
        </li>
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
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
      <ul className="my-orders">
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
      <ul className="sign-out-container">
        <li>
          <a href="/" className="email">
            camilayokoo@gmail.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
