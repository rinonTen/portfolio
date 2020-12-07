import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Works from './Works';

export default function App() {
    return (
        <>
            <Header />
            <main className="page_container main_container">
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route exact path='/works'>
                    <Works />
                </Route>
            </Switch> 
            </main>
        </>
    )
}
