/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputLabel, InputText, Button, Logo } from '../../common/Elements.styled';
import LoginInputs from './Login.styled';
import AppLayout from '../../components/AppLayout';
import useForm from '../../hooks/form';

const loginForm = (formValues, setFormValues, setUser) => (
  <LoginInputs>
    <InputLabel>Username</InputLabel>
    <InputText type="text" name="username" onChange={setFormValues} />
    <InputLabel>Password</InputLabel>
    <InputText type="text" name="password" onChange={setFormValues} />
    <Button onClick={() => setUser(formValues.username, formValues.password)}>Log In</Button>
  </LoginInputs>
);

const Login = (props) => {
  const { setUser } = props;
  const [formValues, setFormValues] = useForm({ username: '', password: '' });
  return (
    <AppLayout
      isLogin
      gridTemplateCol="50% 50%"
      leftSide={{ content: <Logo height="200px" />, bgColor: 'rgb(67, 154, 254)' }}
      rightSide={{ content: loginForm(formValues, setFormValues, setUser) }}
    />
  );
};

export default Login;
