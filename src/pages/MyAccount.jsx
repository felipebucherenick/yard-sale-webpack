import React from 'react';
import '@styles/Account.scss';

const MyAccount = () => {
  return (
    <div className="Account">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="" className="form">
          <label for="name" className="label">
            Name
          </label>
          <p className="value">Camila Yokoo</p>
          <label for="email" className="label">
            Email address
          </label>
          <p className="value">camilayokoo@gmail.com</p>
          <label for="password" className="label">
            Password
          </label>
          <p className="value">********</p>

          <input type="submit" className="secondary-button account-button" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
