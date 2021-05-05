import React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header";
import store from "../store";
import {Provider} from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

describe('Header',  () => {
    test('It is renders correctly', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot();
    })
})
