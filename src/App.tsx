import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Layout } from "antd";
import {Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";

const App: React.FC = () => (
        <Layout className="App">
            <Switch>
                <Route exact path={['/', '/search', '/film/:id']}>
                    <Header/>
                    <Main />
                    <Footer />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </Layout>
)

export default App;
