import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';
import {getCookie} from '../auth/helper';

const Container = styled.div`
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
            <Container>
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
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default main;
