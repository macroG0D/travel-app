import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from "../search";
import Lang from "../lang";

const Header = ({ updateFilter}) => {
  const currentPath = useLocation().pathname;
  const isMain = (currentPath === '/') || false;

  return (
    <header className="header">
      <div className="header__content">
        <NavLink to={'/'}>
            <img className="header__logo" src="/images/logo.svg" alt="travel-app"></img>
        </NavLink>
        {isMain ? <Search updateFilter={updateFilter}/> : <></>}
        <Lang/>
      </div>
    </header>
  )
};

export default Header;
