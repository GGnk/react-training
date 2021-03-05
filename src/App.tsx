import React from "react";
import './assets/scss/app.scss';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () => {

    return (
        <div id="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;