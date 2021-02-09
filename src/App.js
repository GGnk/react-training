import React, { Component, createElement } from "react";
import './assets/app.css';

import Pure from './components/PureComponent'
import FunctionComponent from './components/FunctionComponent'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Class Component</h1>
                </div>
                <Pure />
                <FunctionComponent />
                { createElement(
                    'div', 
                    null,
                    createElement('h1', null, 'I am created via createElement')
                    ) }
            </div>
        );
    }
}

export default App;