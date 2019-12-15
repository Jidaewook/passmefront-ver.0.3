import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';



const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'submit'
    });
    const {name, email, password, buttonText} = values;

    const handleChange = name => event => {

        //들어온 값으로 name이라는 '밸류항목값(name, email, password..)'으로 받는다. 
        setValues({...values, [name]: event.target.value});
    };

    const clickSubmit = event => {
        event.preventDefault();
        
        console.log(setValues);

        setValues({...values, buttonText: 'Submitting'});

        axios({
            method: 'POST',
            url: "http://localhost:5000/user/register",
            data: {name, email, password}
        })
            .then(response => {
                console.log('REGISTER success', response)
                setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted'});
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('Register Error', error.response.data);
                setValues({...values, buttonText: 'Submit'});
                toast.error(error.response.data.error);
            });
    };


    const registerForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange('name')}
                    value={name}
                    type="text"
                    className="form-control"
                />
            </div>

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
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>


    );

    return (
        <Layout>
            <div className = "col-md-6 offset-md-3">
                <ToastContainer />
                <h1>Register</h1>
                {registerForm()}
                <br/>
                <Link to="/auth/password/forgot" className="btn btn-sm btn-outline-danger">
                    Forgot Password
                </Link>
            </div>
        </Layout>
    )
};



export default Register;