import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Register from './auth/register';
import Login from './auth/login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;