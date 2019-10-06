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

      
        this.state = {
            name:"",
            quantity:"",
            user: null
        };

        const handleChange = event => {
            console.log("Done");
            alert('Value submitted: ' + this.state.name);
            event.preventDefault();
          };

    }




    renderForm() {
        return (
            <Container>
            <Card  className="mainCard">
                <Card.Title className="titleCard" >Add equipment</Card.Title>
         <Card.Body>
         <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                    <FormGroup controlId="quantity" bsSize="large">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl
                            autoFocus
                            type="Text"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button onClick ="this.handleSubmit()"variant="primary" type="submit" >Add Equipment</Button>
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