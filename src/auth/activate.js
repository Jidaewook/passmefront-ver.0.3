import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Activate = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    });

    const clickSubmit = event => {
        event.preventDefault();
        console.log(
            "회원가입이 잘 되었다."           
        )
    };
    
    const activateLink = () => (
        <div className="text-center">
            <h1 className="p-5">Hey ???, Ready to activate your account?</h1>
            <button className="btn btn-outline-primary" onClick={clickSubmit}>
                Activate Account
            </button>
        </div>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {activateLink()}
            </div>
        </Layout>
    );
};

export default Activate;