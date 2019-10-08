/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react"
import Card from 'react-bootstrap/Card';
import RecipeDetails from "./RecipeDetails"
import {Container, FormLabel, FormControl, FormGroup } from "react-bootstrap"
export default class Form extends Component {
    constructor(props) {
        super(props);
    this.state = {  
    object1: [{name:""}],
    Hops: "",
    description: ""
  };
}   
handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
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
      object1: [...prevState.object1, {name:""}],
    }));
  }

render() {
    let {object1} = this.state
    return (
        <Container>
            <Card  className="cardMain">
         <Card.Body>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <FormGroup>
                    <FormLabel color="white" htmlFor="name">Hops</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="Hops" 
                        id="Hops"  
                    />
                </FormGroup>  
        <FormGroup>
            <FormLabel color="white" htmlFor="description">Description</FormLabel>
            <FormControl
                        autoFocus
                        type="text"
                        name="description" 
                        id="description"  
            />
        </FormGroup>
        <button onClick={this.addValues}>Add more</button>
        <RecipeDetails object1={object1} />
        <input type="submit" value="Submit" /> 
      </form>
      </Card.Body>
      </Card>
      </Container>
    )
  }
}
