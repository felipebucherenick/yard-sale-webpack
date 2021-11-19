import React from 'react';

import '@styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery__form-container">
        <h1 className="title">Password Recovery</h1>
        <p className="subtitle">Inform the email address used to create your account</p>
        <form action="" className="form">
          <label for="email" className="label">
            Email address
          </label>
          <input id="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />

          <input type="submit" className="primary-button login-button" value="Submit" />
          <a href="/" className="PasswordRecovery__back-login">
            Back to log in
          </a>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
