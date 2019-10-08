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
            user: "user1"
        };

        var _this = this;

    }

    onSetTitle(event) {
        this.setState({
          name: event.target.value          
        });
      }

    onSetQuantity(event) {
        this.setState({
      quantity: event.target.value 
    });
}

        handleSubmit(event) {
            console.log("Done");
            let req = {}
            req.name = event.state.name
            //console.log("Done "+ JSON.stringify(req));
            alert('value submitted: ' + event.state.name);
            event.preventDefault();
          };

    renderForm() {
        return (
            <Container>
            <Card  className="mainCard">
         <Card.Body>
         <Card.Title className="titleCard" >Add equipment</Card.Title>
         <Form>
                <FormGroup controlId="name" bsSize="large">
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="Text"
                         value={this.state.name}
                         onChange={this.onSetTitle.bind(this)}
                      
                    />
                </FormGroup>
                    <FormGroup controlId="quantity" bsSize="large">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl
                            autoFocus
                            type="Text"
                            value={this.state.quantity}
                            onChange={this.onSetQuantity.bind(this)}
                        />
                    </FormGroup>
                    <Button onClick ="this.handleSubmit(this)"  id = "btn-color" type="submit" >Add Equipment</Button>
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