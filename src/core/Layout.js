import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


//찾아서 해결해봐야 함
const UL = styled.div`
    background_color: rgba(20, 20, 20, 1);
    
`;






const Layout = ({children, match, history}) => {
    const isActive = path => {
        if(match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };
    
    const nav = () => (
        //파란선 디자인 포함(부트스트랩 기본 디자인)
        <UL className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link" style={isActive('/register')}>
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link" style={isActive('/login')}>
                    Login
                </Link>
            </li>
        </UL>
    )
    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    )
}

export default withRouter(Layout);