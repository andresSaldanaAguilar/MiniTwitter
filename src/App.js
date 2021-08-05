/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import useSessionUser from './hooks/sessionUser';
import Login from './views/Login';
import Profile from './views/Profile/Profile';

function App() {
  const [sessionUser, setUser, unsetUser] = useSessionUser();
  // return <Login setUser={setUser} />;
  return <Profile sessionUser={sessionUser} unsetUser={unsetUser} />;
}

export default App;
