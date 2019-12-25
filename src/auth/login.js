import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import {authenticate, isAuth} from './helper';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import styled from "styled-components"



const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'submit'
    });
    const { email, password, buttonText } = values;

    const handleChange = name => event => {

        //들어온 값으로 name이라는 '밸류항목값(name, email, password..)'으로 받는다. 
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();

        console.log("Values are... ", values);

        setValues({ ...values, buttonText: 'Submitting' });

        axios({
            method: 'POST',
            url: "http://localhost:5000/user/login",
            data: { email, password }
        })
            .then(response => {
                console.log('Login success', response)
                authenticate(response, () => {
                    setValues({...values, name: '', email: '', password: '', button: 'Submitted'});
                    toast.success(response.data.message);
                })
                
            })
            .catch(error => {
                console.log('Login Error', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };


    const loginForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">E-mail</label>
                <input
                    onChange={handleChange('email')}
                    value={email}
                    type="email"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange('password')}
                    value={password}
                    type="password"
                    className="form-control"
                />
            </div>
            <div>
                <div>
                    <div>
                        <input type="checkbox" aria-label="Checkbox for following text input" />자동으로 로그인하기
                        <br/>??
                    </div>
                </div>
            </div>
           
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
            <span>소셜로그인</span>
            <div>
                <button className="d-flex justify-content-end social_icon">
                    <span><i className="fab fa-facebook-square"></i></span>
                </button>
            </div>
            <div>
                <button className="d-flex justify-content-end social_icon">
                    <span><i className="fab fa-twitter-square"></i></span>
                </button>
            </div>
            <div>
                <button className="d-flex justify-content-end social_icon">
                    <span><i className="fab fa-google-plus-square"></i></span>
                </button>
            </div>
            <div>
                <button className="d-flex justify-content-end social_icon">
                    <span><i className="fab fa-naver-square"></i></span>
                </button>
            </div>
            
        </form>
        


    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to ="/" />: null}
                <h1>LOGIN</h1>
                {loginForm()}
                <br />  
                    회원가입이 되어있지 않다면?
                        <Link to="/register" className="btn btn-sm btn-outline-danger">
                            가입하기
                        </Link>
                <br />
                    비밀번호가 생각나지 않으면?
                        <Link to="/forgot" className="btn btn-sm btn-outline-danger">
                            회원정보찾기
                        </Link>
            </div>
        </Layout>
    )
};



export default Login;