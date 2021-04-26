import React from 'react';
import Navigation from './Navigation';
import AuthNav from './Authnav';
import UserMenu from './UserMenu';

// {isAutentificated}
const Appbar = ({ isAutentificated }) => {
  return (
    <header>
      <Navigation />
      {isAutentificated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Appbar;
