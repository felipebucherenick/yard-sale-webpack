import React from 'react';
import '../styles/MyAccount.scss'

const MyAccount = () => {
    return (
        <div className="create-account">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <form action="" className="form">
                <label for="name" className="label">Name</label>
                <p className="value">Camila Yokoo</p>
                <label for="email" className="label">Email address</label>
                <p className="value">camilayokoo@gmail.com</p>
                <label for="password" className="label">Password</label>
                <p className="value">********</p>

                <input type="submit" className="secondary-button edit-button" value="Create"/>
            </form>
        </div>
    </div>
    );
}

export default MyAccount;