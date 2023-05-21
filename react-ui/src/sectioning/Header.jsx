import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../mocks/navs.json';

const Header = () => {
  const navs = data.map((nav, index) => {
    return (
      <NavLink to={nav.href} key={`${nav.id}`}>
        {nav.name}
      </NavLink>
    );
  });

  return (
    <header>
      <div className="y-wrap y-navs">{navs}</div>
    </header>
  );
};
export default Header;
