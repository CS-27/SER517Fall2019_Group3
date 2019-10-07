/*Author: Jahnavi Bantupalli
Date added: Oct 2, 2019
*/
import React, { Component } from "react";
import {Form,
    FormGroup,
    FormControl,
    FormLabel, Button
} from "react-bootstrap";
import './ingredientPage.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
export default class IngredientPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isLoading: false,
            name:"",
            quantity:"",
            user: null
        };

        
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        console.log(this.state);
    
        event.preventDefault();
      }


    renderForm() {
        return (
            <Container>
            <Card  className="cardMain">
                <Card.Title className="card-title" >Add an ingredient </Card.Title>
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
                    <Button onClick ={this.handleSubmit} variant="primary" type="submit" >Add Ingredient</Button>

    
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
