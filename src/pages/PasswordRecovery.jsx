import React from 'react';
import '@styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
        <div className="PasswordRecovery__form-container">
            <img src={logo} alt="Logo" className="PasswordRecovery__logo"/>
            <h1 className="PasswordRecovery__title">Password Recovery</h1>
            <p className="PasswordRecovery__subtitle">Inform the email address used to create your account</p>
            <form action="" className="PasswordRecovery__form">
                <label for="email" className="PasswordRecovery__label">Email address</label>
                <input id='email' type="email" className="PasswordRecovery__input PasswordRecovery__input-email" placeholder="camilayokoo@gmail.com"/>

                <input type="submit" className="PasswordRecovery__primary-button PasswordRecovery__login-button" value="Submit"/>
                <a href="/" className="PasswordRecovery__back-login">Back to log in</a>
            </form>
        </div>
    </div>
    );
}

export default PasswordRecovery;