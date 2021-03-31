import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeaderContainer, FooterContainer } from '../containers';
import { Home, About, Works } from '../pages';


export default function App() {
    return (
        <React.Fragment>
            <HeaderContainer />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/works" >
                    <Works />
                </Route>
                <Route path="/about" >
                    <About /> 
                </Route>
            </Switch>
            <FooterContainer />
        </React.Fragment>
    )
}
