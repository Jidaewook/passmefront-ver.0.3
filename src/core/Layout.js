import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


//찾아서 해결해봐야 함
const UL = styled.div`
    background_color: rgba(20, 20, 20, 1);
    
`;






const Layout = ({children}) => {
    const nav = () => (
        //파란선 디자인 포함(부트스트랩 기본 디자인)
        <UL className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="text-light nav-link">HOME</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="text-light nav-link">Register</Link>
            </li>
        </UL>
    )
    return (
        <Fragment>
            {nav()}
            <UL className="container">
                {children}
            </UL>
        </Fragment>
    )
}

export default Layout;