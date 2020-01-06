import React from 'react';
import NaverLogin from 'react-naver-login/dist/index';
import axios from 'axios';

const Naver = ({informParent = f => f}) => {

    return (
        <div className="pb-3">
            <NaverLogin 
                clientId="nhrjhRUqOrRkg_P36BK1"
                callbackUrl="http://127.0.0.1:3000/private"
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Login with Naver

                    </button>
                )}

                cookiePolicy={'single_host_origin'}

            />

        </div>
    );
};

export default Naver;