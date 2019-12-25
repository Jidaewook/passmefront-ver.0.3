// import React, {Component} from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import {isAuth} from './helper';

// const AdminRoute = ({component: Component, ...rest}) => {
//     <Route
//         {...rest}
//         render={
//             props =>
//                 isAuth() && isAuth().role === 'admin' ? (
//                     <Component {...props} />
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: '/login',
//                                 state: { from: props.location }
//                             }}
//                         />
//                     )
//         }
//     >
//     </Route>
// };

// export default AdminRoute;

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from './helper';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
render = {
    props =>
    isAuth() && isAuth().role === 'admin' ? (
        <Component {...props} />
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: props.location }
            }}
        />
    )
        }
    >

    </Route>
);

export default AdminRoute;