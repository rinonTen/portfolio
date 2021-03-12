import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from '../globalStyles';
import { GlobalContext } from '../contexts/globalContext';

import App from './app';

ReactDOM.render(
    <GlobalContext>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </GlobalContext>
    ,
    document.getElementById("root")
)
