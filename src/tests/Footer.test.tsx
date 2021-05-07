import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter as Router} from "react-router-dom";

describe('Footer',  () => {
    test('It is renders correctly', () => {
        const { asFragment } = render(
                <Router>
                    <Footer />
                </Router>
        )
        expect(asFragment()).toMatchSnapshot();
    })
})
