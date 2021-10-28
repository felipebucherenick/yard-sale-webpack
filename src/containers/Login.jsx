import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
        <div className="form-container">
            <img src="./assets/logos/logo_yard_sale.svg" alt="Logo" className="logo"/>
            <form action="" className="form">
                <label for="email" className="label">Email address</label>
                <input id='email' type="email" className="input" placeholder="camilayokoo@gmail.com"/>
                <label for="password" className="label">Password</label>
                <input id='password' type="password" className="input" placeholder="********"/>

                <input type="submit" className="primary-button login-button" value="Log in"/>
                <a href="/" className="forgot-password">Forgot my password</a>
                <input type="submit" className="secondary-button sign-up-button" value="Sign up"/>
            </form>
        </div>
    </div>
    );
}

export default Login;