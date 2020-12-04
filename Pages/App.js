import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Works from './Works';

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route exact path='/works'>
                    <Works />
                </Route>
            </Switch> 
        </div>
    )
}
