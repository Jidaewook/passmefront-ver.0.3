import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Google = ({informParent = f => f}) => {
    const responseGoogle = response => {
        console.log(response);
        axios({
            method: 'POST',
            url: "http://localhost:5000/user/google-login",
            data: { idToken: response.tokenId}
        })
            .then(response => {
                console.log('Google Login Success', response);
                informParent(response);
            })
            .catch(err => {
                console.log('Google Login Error', err.response);
            });
    };
    return (
        <div className="pb-3">
            <GoogleLogin 
                clientId="233813199568-8pdarhsi50deaqieba6mspkd5a2j7645.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="btn btn-danger btn-lg btn-block"
                    >
                        <i className="fab fa-google pr-2"></i>Login with Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )   
};

export default Google;