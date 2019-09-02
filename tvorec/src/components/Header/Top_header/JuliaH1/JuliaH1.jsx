import React from 'react';
import s from './JuliaH1.module.css';
import { NavLink } from 'react-router-dom';

const JuliaH1 = () => {
  return (
        <div className={s.julia_h1}>
            <NavLink to="/AboutMe"><h1>Julia Fedoruk</h1></NavLink>
        </div>
  );
}

export default JuliaH1;
