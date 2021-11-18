import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="" className="form">
          <label for="name" className="label">
            Name
          </label>
          <input id="name" type="name" className="input" placeholder="Camila Yokoo" />
          <label for="email" className="label">
            Email address
          </label>
          <input id="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />
          <label for="password" className="label">
            Password
          </label>
          <input id="password" type="password" className="input" placeholder="********" />

          <input type="submit" className="primary-button create-button" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
