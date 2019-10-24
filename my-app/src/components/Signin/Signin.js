/*Author:             Rishab Mantri
  Initial Creation:   September 21, 2019
  Modified date:      October 10,2019
  About:  This Signin page for user to login to the application
*/

import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Container,
    Button
} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router-dom';
import './Signin.css';
import axios from "axios";
export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "",
            password: "",
            authenticated:"",
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0
        );
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        // this.props.history.push('/')
        var apiBaseUrl = "http://localhost:5000";
        axios.get(apiBaseUrl+"/userCheckLogin?"+"userID="+ this.state.email+ "&password="+ this.state.password)
            .then(response => {
                console.log(response);
                if(response.data.Status == "True"){

                    console.log("Login successfull");
                    alert("Logged in");
                    sessionStorage.setItem('username',this.state.email);
                    console.log(sessionStorage.getItem("username"));
                    this.props.history.push('/')

                }
                else if(response.data.Status == "False"){
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });



        this.setState({ isLoading: false });
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }


    render() {
        return (
            <Container>
            <Card  className="cardMainOne">
         <Card.Body className = "card-body-one">
         <form>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
             <Button onClick = {this.handleSubmit}  id = "btn-color" type="submit" >Login</Button>
            </form>
         </Card.Body>
       </Card>
            </Container>
        );
    }


}
