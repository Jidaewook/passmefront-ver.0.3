import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Register from './auth/register';
import Login from './auth/login';
import Forgot from './auth/forgot';
import Activate from './auth/activate';
import PrivateRoute from './auth/privateRoute';
import Private from './core/private';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/forgot" exact component={Forgot} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <PrivateRoute path="/private" exact component={Private} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;