import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { interceptors } from "./assets/js/http";

import 'antd/dist/antd.css';
import './assets/scss/app.scss';

import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";

interceptors()

// store.dispatch(fetchListMovies())

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
