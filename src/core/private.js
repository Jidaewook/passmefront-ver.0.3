import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {isAuth, getCookie, logout} from "../auth/helper";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Private = ({history}) => {
    const [values, setValues] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const {role, name, email, password, buttonText} = values;

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    }

    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, []);

    // 에러분자
    // const loadProfile = () => {
    //     axios({
    //         method: 'GET',
    //         url: `http://localhost:5000/user/${isAuth()._id}`,
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(response => {
    //         console.log('Private profile update', response);
    //         const {role, name, email} = response.data;
    //         setValues({...values, role, name, email});
    //     })
    //     .catch(error => {
    //         console.log('Private profile update error', error.response.data.error);
    //         if(error.response.status === 401){
    //             logout(() => {
    //                 history.push('/');
    //             })
    //         }
    //     })
    // };

    const loadProfile = () => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('PRIVATE PROFILE UPDATE', response);
                const { role, name, email } = response.data;
                setValues({ ...values, role, name, email });
            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                if (error.response.status === 401) {
                    logout(() => {
                        history.push('/');
                    });
                }
            });
    };

    const clickSubmit = () => {

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
                    defaultValue={email}
                    type="email"
                    className="form-control"
                    disabled
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange('password')}
                    value={password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                />
            </div>

            <div>
                <button className="btn btn-info btn-block mt-4" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );
    //에러 투성이
    // const updateForm = () => {
    //     <form>
    //         <div className="form-group">
    //             <input
    //                 defaultValue={role}
    //                 type="text"
    //                 className="form-control"
    //             />
                
    //         </div>
    //         <div className="form-group">
    //             <input
    //                 onChange={handleChange('name')}
    //                 value={name}                    
    //                 type="text"
    //                 className="form-control"
    //             />

    //         </div>
    //         <div className="form-group">
    //             <input
    //                 onChange={handleChange('email')}
    //                 value={email}
    //                 type="email"
    //                 className="form-control"
    //             />

    //         </div>
    //         <div className="form-group">
    //             <input
    //                 onChange={handleChange('password')}
    //                 value={password}
    //                 type="password"
    //                 className="form-control"
    //                 placeholder="Password"
    //             />

    //         </div>
    //         <div>
    //             <button className="btn btn-info btn-block mt-4" onClick={clickSubmit}>
    //                 {buttonText}
    //             </button>
    //         </div>
    //     </form>
    // };

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