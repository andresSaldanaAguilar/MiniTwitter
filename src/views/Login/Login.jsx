/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../img/logo.png';
import './Login.css';
import user from '../../mocks/user.json';

const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target[0].value;
  const password = event.target[1].value;
  if (user.username === username && user.password === password) {
    alert('successful login');
  } else alert('incorrect username or/and password');
};

const loginForm = () => (
  <form onSubmit={handleSubmit} className="loginInputs">
    <label>Username</label>
    <input type="text" name="username" />
    <label>Password</label>
    <input type="text" name="password" />
    <button type="submit" value="Submit">
      Log In
    </button>
  </form>
);

const Login = () => (
  <div className="twoSideGrid">
    <div className="flexCentered logoSide">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="flexCentered">{loginForm()}</div>
    <div />
  </div>
);

export default Login;
