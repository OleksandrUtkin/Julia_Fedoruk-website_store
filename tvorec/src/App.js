import React, {Component} from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import './fonts/fonts.css';
import {BrowserRouter, Route} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Store from "./components/Store/Store";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";



//import Main from "./components/Main/Main";
//import s from "./components/Main/Main.module.css";

class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            menuBtnClicked: false
        }
    }
    updMenuBtnClicked = () => {
        this.setState({
            menuBtnClicked: !this.state.menuBtnClicked
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div className=
                         {this.state.menuBtnClicked ?  `${s.wrapper_hidden}`:`${s.wrapper}` }>
                    <Header
                        updMenuBtnClicked={this.updMenuBtnClicked}
                        menuBtnClicked={this.state.menuBtnClicked}/>
                    <main className={s.main}>
                        <Route path="/" component={AboutMe} />
                        <Route path="/store" component={Store} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/information" component={Information}/>
                        <Route path="/delivery" component={Delivery} />
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
