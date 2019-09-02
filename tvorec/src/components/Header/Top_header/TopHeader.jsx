import React from 'react';
import s from './TopHeader.module.css';
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";
import JuliaH1 from "./JuliaH1/JuliaH1";
import Logo from "./Logo/Logo";
import MenuBtn from "./MenuBtn/MenuBtn";

const TopHeader = (props) => {
  return (
      <div className={s.top_header}>
        <Logo/>
        <JuliaH1/>
        <SocialMediaIcons/>
        <MenuBtn
            updMenuBtnClicked={props.updMenuBtnClicked}
            menuBtnClicked={props.menuBtnClicked}
        />
      </div>
  );
}

export default TopHeader;
