import React from 'react';
import s from './MenuBtn.module.css';

const MenuBtn = (props) => {
    return (
        <div
            className={s.menu_btn} onClick={props.updMenuBtnClicked}>
                <span className={
                    props.menuBtnClicked ?
                        `${s.menu_btn_span} ${s.btn_span1} ${s.btn_span_1_clicked}`
                        : `${s.menu_btn_span} ${s.btn_span1}`}></span>
            <span className={
                props.menuBtnClicked ?
                    `${s.menu_btn_span} ${s.btn_span2} ${s.btn_span_2_clicked}`
                    : `${s.menu_btn_span} ${s.btn_span2}`}></span>
            <span className={
                props.menuBtnClicked ?
                    `${s.menu_btn_span} ${s.btn_span3} ${s.btn_span_3_clicked}`
                    : `${s.menu_btn_span} ${s.btn_span3}`}></span>
        </div>
    );
}

export default MenuBtn;
