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

    const { role, name, email, password, buttonText } = values;

    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Admin Profile update', response);
                const {role, name, email} = response.data;
                setValues({ ...values, role, name, email});
            })
            .catch(error => {
                console.log('Admin Profile Update Error', error);
                if(error.response.status === 401) {
                    logout(() => {
                        history.push('/');
                    });
                }
            });
    };


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
                <p>이름 입력</p>
                <input
                    onChange={handleChange('name')}
                    value={name}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <p>이메일 입력</p>
                <input
                    onChange={handleChange('email')}
                    value={email}
                    type="email"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <p>패스워드 입력</p>
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