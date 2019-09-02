import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p> Created by </p>
            <a target='blank' href="https://oleksandrutkin.github.io">Oleksandr Utkin</a>
        </footer>
    );
}

export default Footer;
