/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import user from '../../mocks/user.json';
import { InputLabel, InputText, Button, Logo } from '../../common/Elements.styled';
import LoginInputs from './Login.styled';
import AppLayout from '../../components/AppLayout';

const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target[0].value;
  const password = event.target[1].value;
  if (user.username === username && user.password === password) {
    alert('successful login');
  } else alert('incorrect username or/and password');
};

const loginForm = () => (
  <LoginInputs onSubmit={handleSubmit}>
    <InputLabel>Username</InputLabel>
    <InputText type="text" />
    <InputLabel>Password</InputLabel>
    <InputText type="text" />
    <Button type="submit">Log In</Button>
  </LoginInputs>
);
const Login = () => (
  <AppLayout
    gridTemplateCol="50% 50%"
    leftSide={{ content: <Logo height="200px" />, bgColor: 'rgb(67, 154, 254)' }}
    rightSide={{ content: loginForm() }}
  />
);

export default Login;
