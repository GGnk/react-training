import * as React from "react";
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import HeaderComponent from "../src/components/HeaderComponent";

const App: React.FC = () => (
        <>
            <Header>
                <HeaderComponent />
            </Header>
            <Main />
            <Footer />
        </>
)

export default App;
