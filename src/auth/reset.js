import React, { useState, useEffect} from 'react';
import jwt from 'jsonwebtoken';
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Reset = ({match}) => {

    const passwordResetForm = () => {

    };


    return (
        <div className="col-md-6 offset-md-3">
            <ToastContainer />
            <h1 className="p-5 text-center">Hey {}, Type your new password</h1>
            {passwordResetForm()}
        </div>
    );
};

export default Reset;