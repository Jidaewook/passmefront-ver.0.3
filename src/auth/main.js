import React, { Component } from 'react';
import { Table, Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {getCookie} from '../auth/helper';

const container = styled.div`
    width: 80%;
    alignItems: center;
    justify-content: center;
    padding: 30px;
    display: flex;
  
`;


class main extends Component {
    
    
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.getData();
    }
    
    moveScreen = history => {
        history.push('/posting')
    }

    getData(){

        const token = getCookie('token');
        console.log('token is.. ', token)
        axios({
            method: 'GET',
            url: `http://localhost:5000/bbs/`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('BBS info is..', response)

            })
            .catch(err => {
                console.log('Error is..', err)

            });

        // axios({
        //     method: 'GET',
        //     url: `http://localhost:5000/user/${isAuth()._id}`,
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        //     .then(response => {
        //         console.log('PRIVATE PROFILE UPDATE', response);
        //         const { role, name, email } = response.data;
        //         setValues({ ...values, role, name, email });
        //     })
        //     .catch(error => {
        //         console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
        //         if (error.response.status === 401) {
        //             logout(() => {
        //                 history.push('/');
        //             });
        //         }
        //     });
    }


    render() {
        return (
            <container>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{}</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to="/posting"><Button color="primary">글쓰기</Button>{' '}</Link>
                
            </container>

            
        );
    }
}

export default main;
