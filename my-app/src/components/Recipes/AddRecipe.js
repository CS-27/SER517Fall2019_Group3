/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import RecipeDetails from "./RecipeDetails";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./AddRecipe.css";
import {Container, FormLabel, FormControl, FormGroup, Col, Row } from "react-bootstrap"
import Form from "react-bootstrap/FormGroup";
import HopsList from "./HopsSchedule";
import Button from '@material-ui/core/Button';

export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.message = ""
    this.state = {  
    object1: [{name:"", quantity:""}],
    recipename: "",
    malt: "",
    directions: "",
    Hops1:""
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
        <FormGroup controlId="recipename">
                    <FormLabel color="white" >Recipe Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.recipename} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="malt">
            <FormLabel color="white" >Malt</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in lbs"
                        value={this.state.malt}
                        onChange={this.handleChange}
            />
        </FormGroup>
        </Col> 
        </Row>
        <FormGroup controlId="Hops1">
                    <FormLabel color="white" >Add Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: hop1 qty1, hop2 qty2 .."
                        value={this.state.Hops1} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="schedule">
                    <FormLabel color="white" >Hops Schedule</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: hop1 qty1, hop2 qty2 .."
                        value={this.state.schedule} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
        <FormGroup controlId="directions">
            <FormLabel color="white" >Directions</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: Mash at 150˚F for 60 minutes or until conversion is complete. Boil for..."
                        value={this.state.directions}
                        onChange={this.handleChange}
            />
        </FormGroup>
        <Button onClick = {this.handleSubmit} id="button" type="submit"> Submit </Button>
      </Form>
      </Card.Body>
      </Card>
</Container>

      
    )
  }
}
