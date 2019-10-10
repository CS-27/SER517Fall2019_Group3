
import React, { Component } from "react";
import {Form,
    FormGroup,
    FormControl,
    FormLabel, Button
} from "react-bootstrap";
import './shoppingPage.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
export default class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.message = ""
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
        // var xhr = new XMLHttpRequest()
        // xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
      }


    renderForm() {
        return (
            <Container>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >Add an Item </Card.Title>

            <p>{this.message}</p>
         <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name"  >
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
                    <Button onClick ={this.handleSubmit} id = "btn-color" variant="primary" type="submit" >Add Item</Button>

    
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
