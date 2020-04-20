import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from 'assets/logo.png';
import './Header.scss';

const Header = () => {
  const fullName = useSelector((state: any) => `${state.users.firstName} ${state.users.lastName}`);
  if (!fullName) {
    return null;
  }
  return (
    <header className="header container ">
      <Link to="/">
        <img src={logo} alt="swipejob logo" />
      </Link>
      {fullName && <div className="user-profile text-white">{fullName}</div>}
    </header>
  );
};

export default Header;
