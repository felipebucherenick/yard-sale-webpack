import React from 'react';
import '@styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="form-container">
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="" className="form">
          <label for="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input input-password"
            placeholder="********"
          />
          <label for="re-enter-password" className="label">
            Re-enter password
          </label>
          <input
            id="re-enter-password"
            type="password"
            className="input re-enter-password"
            placeholder="********"
          />

          <input type="submit" className="primary-button login-button" value="Confirm" />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
