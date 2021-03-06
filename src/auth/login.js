import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import {authenticate, isAuth} from './helper';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import styled from "styled-components"
import Google from './google';
import Facebook from './facebook';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const Login = ({history}) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'submit'
    });
    const { email, password, buttonText } = values;

    const informParent = response => {
        authenticate(response, () => {
            isAuth() && isAuth.role === 'admin' ? history.push('/admin') : history.push('/main');
        });
    };

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
                    console.log("enter");
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/main');
                })
                
            })
            .catch(error => {
                console.log('Login Error', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };


    const loginForm = () => (
        <Form>
            <FormGroup>
                <Label className="text-muted">E-mail</Label>
                <Input
                    onChange={handleChange('email')}
                    value={email}
                    type="email"
                    
                />
            </FormGroup>

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
                    </div>
                </div>
            </div>
           
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
            <span>소셜로그인</span>

            
        </Form>
        

 
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to ="/" />: null}
                <h1>LOGIN</h1>
                {loginForm()}
                <Google informParent={informParent}/>
                <Facebook informParent={informParent}/>

             
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