import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink-active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink-active"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
