import React, {Component} from 'react';
import s from './Nav.module.css';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import SocialMediaIconsNav from "./SocialMediaIconsNav/SocialMediaIconsNav";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showStoreNav: false
        }
    }
    changeShowStoreNav = (e) => {
        this.setState({
            showStoreNav: !this.state.showStoreNav
        })
        e.preventDefault();
    }
    render() {
        return (
            <nav className={
                this.props.menuBtnClicked ? `${s.nav_xs} ${s.nav_xs_show} ${s.nav}`
                    : `${s.nav_xs} ${s.nav_xs_hide} ${s.nav}`
            }>
                <ul>
                    <li className={s.nav_li}>
                        <NavLink to='/'
                                 exact={true}
                                 activeClassName={s.active_link}
                                 onClick={this.props.updMenuBtnClicked}>
                            Про мене
                        </NavLink>
                    </li>
                    <li className={s.nav_li}>
                        <NavLink to='/store'
                                 className={s.store_link}
                                 activeClassName={s.active_link}
                                 onClick={this.changeShowStoreNav}>
                            Магазин
                        </NavLink>
                        <ul className={
                            this.state.showStoreNav ? `${s.store_nav}` : `${s.store_nav} ${s.store_nav_hide}`
                        }>
                            <li>
                                <NavLink to='/store#betonni_viroby'
                                         activeClassName={s.active_link}
                                         onClick={this.props.updMenuBtnClicked}>
                                    Бетонні вироби
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/store#kaktusi_ta_sukulenti'
                                         activeClassName={s.active_link}
                                         onClick={this.props.updMenuBtnClicked}>
                                    Кактуси та сукуленти
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/store#moh"
                                         activeClassName={s.active_link}
                                         onClick={this.props.updMenuBtnClicked}>
                                    Стабілізований мох "Ягель"
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/store#tovari_dla_kaktusiv'
                                         activeClassName={s.active_link}
                                         onClick={this.props.updMenuBtnClicked}>
                                    Супутні товари для кактусів та сукулентів
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/store#kompositsii'
                                         activeClassName={s.active_link}
                                         onClick={this.props.updMenuBtnClicked}>
                                    Готові Композиції
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={s.nav_li}>
                        <NavLink to='/gallery'
                                 activeClassName={s.active_link}
                                 onClick={this.props.updMenuBtnClicked}>
                            Галерея
                        </NavLink>
                    </li>
                    <li className={s.nav_li}>
                        <NavLink to='/information'
                                 activeClassName={s.active_link}
                                 onClick={this.props.updMenuBtnClicked}>
                            Корисна інформація
                        </NavLink>
                    </li>
                    <li className={s.nav_li}>
                        <NavLink to='/delivery'
                                 activeClassName={s.active_link}
                                 onClick={this.props.updMenuBtnClicked}>
                            Пакування та доставка
                        </NavLink>
                    </li>
                </ul>
                <SocialMediaIconsNav/>
            </nav>
        );
    }
}

export default Nav;
