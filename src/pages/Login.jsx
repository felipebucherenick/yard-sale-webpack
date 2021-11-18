import React, { useRef } from 'react';

import '@styles/Login.scss';

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userEmail: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };
  return (
    <div className="Login">
      <div className="Login__form-container">
        <form action="" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input name="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input name="password" type="password" className="input" placeholder="********" />

          <button className="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>
          <a href="/" className="forgot-password">
            Forgot my password
          </a>
          <input type="submit" className="secondary-button sign-up-button" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default Login;
