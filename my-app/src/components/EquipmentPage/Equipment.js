/*Author: Salini Chittineni
  Date:   Oct 2, 2019
  About:  This is to render equipment page to add equipment.
*/
import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Form,
    Button
} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './Equipment.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class Equipment extends Component {
    constructor(props) {
        super(props);
        this.message = ""
      
        this.state = {
            name:"",
            quantity:"",
            user: "user1"
        };

    }

handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
}

        handleSubmit=(event) => {
            console.log(this.state);
            var xhr = new XMLHttpRequest()
            xhr.open('POST', 'http://127.0.0.1:5000/')
            event.preventDefault();           
          }

    renderForm() {
        return (
            <Container>
            <Card  className="mainCard">
         <Card.Body>
         <Card.Title className="titleCard" >Add equipment</Card.Title>
         <p>{this.message}</p>
         <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name" >
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                         value={this.state.name}
                         onChange={this.handleChange}
                      
                    />
                </FormGroup>
                    <FormGroup controlId="quantity">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl
                            autoFocus
                            type="Text"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button onClick = {this.handleSubmit}  id = "btn-color" type="submit" >Add Equipment</Button>
            </Form>
         </Card.Body>
       </Card>
            </Container>
        );
    }

    render() {
        return (
            <div>
                { this.renderForm()}
            </div>
        );
    }
}