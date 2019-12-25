import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import {logout, isAuth, getCookie, updateUser} from '../auth/helper';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Admin = ({history}) => {
    const [values, setValues]= useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {

    };

    const {role, name, email, password, buttonText} = values;

    const clickSubmit = event => {
        
    };

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const updateForm = () => (
        <form>
            <div className="form-group">
                <input 
                    defaultValue={role}
                    type="text"
                    className="form-control"
                    disabled
                />
                    
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange('name')}
                    value={name}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange('email')}
                    value={email}
                    type="email"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange('password')}
                    value={password}
                    type="password"
                    className="form-control"
                />
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
                
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="pt-5 text-center">
                    Admin
                </h1>
                <p className="lead text-center">
                    Profile update
                </p>
                {updateForm()}
            </div>
        </Layout>
    )

};

export default Admin;