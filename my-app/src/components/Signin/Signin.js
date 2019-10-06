import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Container
} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './Signin.css';
import axios from "axios";
export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
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

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
        var apiBaseUrl = "http://localhost:5000";

        axios.get(apiBaseUrl+"/userCheckLogin?"+"userID="+ this.state.email+ "&password="+ this.state.password)
            .then(function (response) {
                console.log(response);
                if(response.data.Status == "True"){
                    console.log("Login successfull");
                    alert("Logged in");
                    this.props.userHasAuthenticated(true);
                    // var uploadScreen=[];
                    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
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
            <Card  className="cardMain">
         <Card.Body>
         <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
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
             <input type="submit" value="Login" />
            </form>
         </Card.Body>
       </Card>
            </Container>
        );
    }


}
