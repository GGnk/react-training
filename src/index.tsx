import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { interceptors } from "./assets/js/http";
import { fetchListMovies } from "./store/reducers/movies";

import 'antd/dist/antd.css';
import './assets/scss/app.scss';

import App from "./App";

interceptors()

store.dispatch(fetchListMovies())

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);