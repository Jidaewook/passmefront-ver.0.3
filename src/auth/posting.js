

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';



class posting extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

  
    render() {
        return (
            <div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                 </FormGroup>
                <Form>
                    <FormGroup>
                        <Label>제목</Label>
                        <Input type="text" name="title" placeholder="제목을 입력하세요" />
                    </FormGroup>
                    <FormGroup>
                        <Label>내용</Label>
                        <Input type="textarea" name="text" placeholder="내용을 입력하세요" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default posting;
