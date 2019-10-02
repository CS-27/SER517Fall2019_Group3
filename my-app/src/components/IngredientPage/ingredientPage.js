/*Author: Jahnavi Bantupalli
Date added: Oct 2, 2019
*/
import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel
} from "react-bootstrap";
import './ingredientPage.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
export default class IngredientPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            name:"",
            quantity:"",
            newUser: null
        };
    }
    renderForm() {
        return (
            <Container>
            <Card  className="cardMain">
         <Card.Body>
         <form onSubmit={this.handleSubmit}>
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
    
            </form>
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
