import React, {Component} from 'react';
import './App.css';
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
                         {this.state.menuBtnClicked ?  `wrapper_hidden`:`wrapper` }
                    >
                    <Header
                        updMenuBtnClicked={this.updMenuBtnClicked}
                        menuBtnClicked={this.state.menuBtnClicked}
                    />
                    <main className='main'>
                        <Route path="/aboutMe" render={ ()=> <AboutMe/>} />
                        <Route path="/store" render={ ()=> <Store/>}/>
                        <Route path="/gallery" render={ ()=> <Gallery/>} />
                        <Route path="/information" render={ ()=> <Information/>}/>
                        <Route path="/delivery" render={ ()=> <Delivery/>} />
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>

        );
    }
}


export default App;
