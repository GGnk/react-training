import * as React from "react";
import 'antd/dist/antd.css';
import '../src/assets/scss/app.scss'

import type {AppProps} from 'next/app'
import store from "../src/store";
import {Provider} from "react-redux";
import {Layout} from "antd";
import {interceptors} from "../src/assets/js/http";

interceptors()
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Layout className="App">
            <Component {...pageProps} />
        </Layout>
    </Provider>
)

export default MyApp;
