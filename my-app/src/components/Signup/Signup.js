/*Author:  Rishab Mantri
  Initial Creation:  September 5, 2019
  Last Modified:  Rishab Mantri
  Modified date:  October 10,2019
  About:  This Signup page for user registeration
*/
import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel
} from "react-bootstrap";
import './Signup.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col,Button } from 'react-bootstrap';
export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            firstname: "",
            lastname: "",
            userID:"",
            password: "",
            confirmPassword: "",
            newUser: null,
            errors: {
                firstname:'',
                lastname:'',
                userID:'',
                email: '',
                password: '',
                confirmPassword:''
              }
        };
    }




    handleChange = event => {
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        this.setState({
            [event.target.id]: event.target.value
        });
        const  name = event.target.id;
        const value = event.target.value;
        let errors = this.state.errors;
        switch (name) {
            case 'firstname': 
            errors.firstname = 
                value.length == 0
                ? 'First name is required'
                : '';
            break;
            case 'lastname': 
            errors.lastname = 
            value.length == 0
            ? 'Last name  is required'
            : '';
            break;
            case 'userID': 
            errors.userID = 
                value.length == 0
                ? 'Username is required'
                : '';
            break;
            case 'password': 
            errors.password = 
            value.length == 0
            ? 'Password  is required'
            : '';
            break;
            case 'email': 
            errors.email = 
            value.length == 0
            ? 'Email  is required'
            : (emailRegex.test(value))?'':'Email entered is invalid';
            break;
            case 'confirmPassword': 
            errors.confirmPassword = 
            (this.state.password != value)
            ? 'Password and confirm password do not match'
            : '';
            break;
            default:
            break;
            }
            this.setState({errors, [name]: value}, ()=> {
                console.log(errors)
            })
    }

    handleSubmit=(event)=> {
        var data = this.state;

        fetch('http://127.0.0.1:5000/userRegister', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                userID: data.userID,
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                password: data.password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

            }
        }).then(res => {
            if(res.status===200)
                this.message = 'User added successfully'
            alert("User created");
            this.props.history.push('/')
        }).catch(err => console.log(err));

        event.preventDefault();
    }


    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }


    renderForm() {
        return (
            <Container>
            <Card  className="cardMainOneThis">
         <Card.Body>      
         <p className="error-message">{this.state.errors.firstname}</p>
            <p className="error-message">{this.state.errors.lastname}</p> 
             <p className="error-message">{this.state.errors.userID}</p>
            <p className="error-message">{this.state.errors.password}</p>
            <p className="error-message">{this.state.errors.email}</p>
            <p className="error-message">{this.state.errors.confirmPassword}</p>

         <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="firstname" bsSize="large">
                    <FormLabel>First name</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                    <FormGroup controlId="lastname" bsSize="large">
                        <FormLabel>Last name</FormLabel>
                        <FormControl
                            autoFocus
                            type="Text"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                <FormGroup controlId="userID" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                        value={this.state.userID}
                        onChange={this.handleChange}
                    />
                </FormGroup>
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
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
             <Button onClick ={this.handleSubmit} id = "btn-color"  variant="primary" type="submit" >Sign up</Button>

            </form>
         </Card.Body>
       </Card>
            </Container>
        );

    }

    render() {
        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}
