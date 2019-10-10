/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import RecipeDetails from "./RecipeDetails";
import "./AddRecipe.css";
import {Container, FormLabel, FormControl, FormGroup, Col, Row } from "react-bootstrap"
export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
    this.state = {  
    object1: [{name:"", quantity:""}],
    Hops: "",
    malt: ""
  };
}   
handleChange = (e) => {
    if (["name", "quantity"].includes(e.target.className) ) {
      let object1 = [...this.state.object1]
      object1[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ object1 }, () => console.log(this.state.object1))
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }

handleSubmit = (e) => { e.preventDefault() }

addValues = (e) => {
    this.setState((prevState) => ({
      object1: [...prevState.object1, {name:"", quantity:""}],
    }));
  }

render() {
    let {object1, Hops, malt} = this.state
    return (
        <Container>
            <Card  className="cardMain">
         <Card.Body>
         <Card.Title className="titleCard" >Make your beer!</Card.Title>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
          <Row>
          <Col>
        <FormGroup>
                    <FormLabel color="white" htmlFor="name">Recipe Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="name" 
                        id="name" 
                        placeholder="e.g: AmericanPaleAle" 
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup>
            <FormLabel color="white" htmlFor="malt">Malt</FormLabel>
            <FormControl
                        autoFocus
                        type="text"
                        name="malt" 
                        id="malt"  
                        placeholder="in lbs"
            />
        </FormGroup>
        </Col> 
        </Row>
        
        <div>Hops</div>
        <RecipeDetails object1={object1} />
        <button id="button" onClick={this.addValues}>Add more Hops</button>
        <FormGroup>
            <FormLabel color="white" htmlFor="directions">Directions</FormLabel>
            <FormControl
                        autoFocus
                        type="text"
                        name="directions" 
                        id="directions"  
                        placeholder="e.g: Mash at 150˚F for 60 minutes or until conversion is complete. Boil for..."
            />
        </FormGroup>
        <input id="button" type="submit" value="Submit" /> 
      </form>
      </Card.Body>
      </Card>
      </Container>
    )
  }
}
