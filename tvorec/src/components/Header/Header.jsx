import React from 'react';
import s from './Header.module.css';
import TopHeader from "./Top_header/TopHeader";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <header className={s.header} >
        <TopHeader
            updMenuBtnClicked={props.updMenuBtnClicked}
            menuBtnClicked={props.menuBtnClicked}
        />
        <Nav
            updMenuBtnClicked={props.updMenuBtnClicked}
            menuBtnClicked={props.menuBtnClicked}
        />
    </header>
  );
}

export default Header;
