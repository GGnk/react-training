import React from "react";
import './assets/app.scss';

import Logo from './components/blocks/Logo'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () => {

    return (
        <div id="app">
            <Header>
                <Logo />
            </Header>
            <Main />
            <Footer >
                <Logo />
            </Footer>
        </div>
    )
}

export default App;