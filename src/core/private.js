import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {isAuth, getCookie, logout} from "../auth/helper";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Private = ({history}) => {

    const updateForm = () => {

    };

    return (
        <div className="private">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <ToastContainer />
                        <h1 className="pt-5 text-center">
                            Private
                        </h1>
                        <p className="lead text-center">
                            Profile update
                        </p>
                        {updateForm()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Private;