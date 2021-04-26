import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      to="/register"
      className="NavLink"
      activeClassName="NavLink-active"
    >
      Регистрация
    </NavLink>
    <NavLink
      exact
      to="/login"
      className="NavLink"
      activeClassName="NavLink-active"
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
