import React from 'react';

import emailIcon from '@icons/email.svg';

import '@styles/PasswordRecoverySentEmail.scss';

const PasswordRecoverySentEmail = () => {
  return (
    <div className="PasswordRecoverySentEmail">
      <div className="sent-mail__container">
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={emailIcon} alt="E-Mail" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn’t receive the email?</span>
          <a href="">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default PasswordRecoverySentEmail;
