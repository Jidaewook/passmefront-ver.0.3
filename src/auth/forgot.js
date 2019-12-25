import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import styled from "styled-components"

const Forgot = () => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'submit'
    });

    const {email, buttonText} = values;

    // 여기서의 name은 위에서 설정된 밸류(키밸류)를 지칭하는 개념.
    const handleChange = name => event => {

        //들어온 값으로 name이라는 '밸류항목값(name, email, password..)'으로 받는다. 초기값을 뿌려주고 바뀐(체인지된) 값을 name항목에 넣어준다.
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();

        // 클릭된 대상을 보여준다.
        console.log("setValue is... ", values);

        setValues({ ...values, buttonText: 'Submitting' });

        axios({
            method: 'PUT',
            url: "http://localhost:5000/user/forgot",
            data: { email }
        })
            .then(response => {
                console.log('Confirm Email', response)
                setValues({ ...values, email: ''});
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('Email Error', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const forgotForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">E-mail</label>
                <input
                // onChange가 html에서 있어야, 레이블이 타이핑가능하다.
                    onChange={handleChange('email')}
                    value={email}
                    type="email"
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
// return 은 화면에 보여지는 부분

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1>Confirm Email</h1>
                {forgotForm()}
                <br />
                회원가입이 되어있지 않다면?
                        <Link to="/register" className="btn btn-sm btn-outline-danger">
                            가입하기
                        </Link>
                <br />
                비밀번호가 생각난다면?
                        <Link to="/login" className="btn btn-sm btn-outline-danger">
                            로그인하기
                        </Link>
            </div>
        </Layout>
    )
}

export default Forgot;
