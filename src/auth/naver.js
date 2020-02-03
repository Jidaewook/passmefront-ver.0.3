import React from 'react';
import NaverLogin from 'react-naver-login/dist/index';
import axios from 'axios';
import { Button } from 'reactstrap';

const Naver = ({informParent = f => f}) => {


    return (
        <div className="pb-3">
            <NaverLogin 
                clientId="nhrjhRUqOrRkg_P36BK1"
                callbackUrl="http://127.0.0.1:3000/private"
                

                cookiePolicy={'single_host_origin'}

            />

        </div>
    );
};

export default Naver;