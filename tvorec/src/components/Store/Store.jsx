import React from 'react';
import s from './store.css';

const Store = (props) => {
    return (
        <section className={s.store}>
            <section id='betonni_viroby'>1</section>
            <section id='kaktusi_ta_sukulenti'>2</section>
            <section id='moh'>3</section>
            <section id='tovari_dla_kaktusiv'>4</section>
            <section id='kompositsii'>5</section>
        </section>
    );
}

export default Store;
