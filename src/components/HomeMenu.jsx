import React from 'react';
import '@styles/HomeMenu.scss';

const HomeMenu = () => {
  return (
    <div className="HomeMenu">
      <ul className="HomeMenu-list">
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li className="sign-out-container">
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
