/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import RecipeDetails from "./RecipeDetails";
import "./AddRecipe.css";
import {Container, FormLabel, FormControl, FormGroup, Col, Row, Button } from "react-bootstrap"
import Form from "react-bootstrap/FormGroup";
export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.message = ""
    this.state = {  
    Hops1: "",
    Quantity1: "",
    Hops2: "",
    Quantity2: "",
    Hops3: "",
    Quantity3: "",
    Hops4: "",
    Quantity4: "",
    Hops5: "",
    Quantity5: "",
    Hops6: "",
    Quantity6: "",
  };
}   
// handleChange = (e) => {
//     if (["name", "quantity"].includes(e.target.className) ) {
//       let object1 = [...this.state.object1]
//       object1[e.target.dataset.id][e.target.className] = e.target.value
//       this.setState({ object1 }, () => console.log(this.state.object1))
//     } else { this.setState({ [e.target.id]: e.target.value
//     })
//     }

//   }
handleChange = event => {
  this.setState({
      [event.target.id]: event.target.value,
      // // object1[event.target.name]: 
      //   let object1 = [...this.state.object1]
      //   object1[event.target.dataset.id][event.target.className] = event.target.value
  });
}



handleSubmit=(event) => {
  console.log(this.state);
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://127.0.0.1:5000/')
  event.preventDefault();           
}

addValues = (e) => {
    this.setState((prevState) => ({
      object1: [...prevState.object1, {name:"", quantity:""}],
    }));
  }

render() {
    let {object1} = this.state
    return (
        <Container>
            <Card  className="cardMain">
         <Card.Body>
         <Card.Title className="titleCard" >Make your beer!</Card.Title>
         <p>{this.message}</p>
      <Form onSubmit={this.handleSubmit} >
          <Row>
          <Col>
        <FormGroup controlId="Hops1">
                    <FormLabel color="white" >1. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops1} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity1">
            <FormLabel color="white" >1. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity1}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>

        <Row>
          <Col>
        <FormGroup controlId="Hops2">
                    <FormLabel color="white" >2. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops2} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity2">
            <FormLabel color="white" >2. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity2}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>

        <Row>
          <Col>
        <FormGroup controlId="Hops3">
                    <FormLabel color="white" >3. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops3} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity3">
            <FormLabel color="white" >3. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity3}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>

        <Row>
          <Col>
        <FormGroup controlId="Hops4">
                    <FormLabel color="white" >4. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops4} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity4">
            <FormLabel color="white" >4. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity4}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>

        <Row>
          <Col>
        <FormGroup controlId="Hops5">
                    <FormLabel color="white" >5. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops5} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity5">
            <FormLabel color="white" >5. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity5}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>

        <Row>
          <Col>
        <FormGroup controlId="Hops6">
                    <FormLabel color="white" >6. Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.Hops6} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Quantity6">
            <FormLabel color="white" >6. Quantity</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.Quantity6}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>
        
        <Button onClick = {this.handleSubmit} id="button" type="submit"> Submit </Button>
      </Form>
      </Card.Body>
      </Card>
      </Container>
    )
  }
}
