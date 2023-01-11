import React from 'react';
import logo from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <nav className="container">
      <img src={logo} alt="jobster logo" className="logo" />
    </nav>
  );
};

export default Logo;
