/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../img/logo.png';
import './Login.css';

const Login = () => (
  <div className="twoSideGrid">
    <div className="flexCentered logoSide">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="flexCentered">
      <div className="loginInputs">
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
      </div>
    </div>
    <div />
  </div>
);

export default Login;
