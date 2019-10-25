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
// import LoaderButton from "./LoaderButton";
import './Signup.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
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
            newUser: null
        };
    }




    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // handleSubmit = async event => {
    //     event.preventDefault();
    //
    //     this.setState({ isLoading: true });
    //
    //     this.setState({ newUser: "test" });
    //
    //     this.setState({ isLoading: false });
    // }

    handleSubmit=(event)=> {
        var data = this.state;
        console.log(data);


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
            // console.log(res.status) ;
            alert("User created");
            this.props.history.push('/')
        }).catch(err => console.log(err));
        // axios.post('http://127.0.0.1:5000/addIngredient', this.state).
        // then(response=> {

        // console.log(response);




        event.preventDefault();
    }


    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }

    // renderConfirmationForm() {
    //     return (
    //         <form onSubmit={this.handleConfirmationSubmit}>
    //             <FormGroup controlId="confirmationCode" bsSize="large">
    //                 <FormLabel>Confirmation Code</FormLabel>
    //                 <FormControl
    //                     autoFocus
    //                     type="tel"
    //                     value={this.state.confirmationCode}
    //                     onChange={this.handleChange}
    //                 />
    //                 {/*<HelpBlock>Please check your email for the code.</HelpBlock>*/}
    //             </FormGroup>
    //             <LoaderButton
    //                 block
    //                 bsSize="large"
    //                 disabled={!this.validateConfirmationForm()}
    //                 type="submit"
    //                 isLoading={this.state.isLoading}
    //                 text="Verify"
    //                 loadingText="Verifying…"
    //             />
    //         </form>
    //     );
    // }

    renderForm() {
        // function validateForm()
        // {
        //     return this.state.email.length > 0 &&
        //         this.state.firstname.length > 0 &&
        //         this.state.userID.length > 0 &&
        //         this.state.lastname.length > 0 &&
        //         this.state.password.length > 0 &&
        //         this.state.password === this.state.confirmPassword;
        //
        // }

        return (
            <Container>
            <Card  className="cardMain">
         <Card.Body>
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
