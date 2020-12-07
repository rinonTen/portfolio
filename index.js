import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalContext} from './GlobalContext';
import App from './Pages/App';

ReactDom.render(
    <GlobalContext>
        <Router>
            <App />
        </Router>
    </GlobalContext>,
    document.getElementById("root"));