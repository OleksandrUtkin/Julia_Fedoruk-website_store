import React from 'react';
import s from './Logo.module.css';
import logo from './../../../../img/logo.PNG'

const Logo = () => {
  return (
        <div className={s.logo_div}>
          <img src={logo} alt="logo"/>
        </div>
  );
}

export default Logo;
