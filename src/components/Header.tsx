import React from 'react';

import { useSelector } from 'react-redux';

import logo from 'assets/logo.png';
import './Header.scss';

const Header = () => {
  const fullName = useSelector((state: any) => `${state.users.firstName} ${state.users.lastName}`);
  if (!fullName) {
    return null;
  }
  return (
    <header className="header container">
      <a href="/">
        <img src={logo} alt="swipejob logo" />
      </a>
      {fullName && <div className="user-profile">{fullName}</div>}
    </header>
  );
};

export default Header;
