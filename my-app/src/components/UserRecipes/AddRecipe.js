/*Author: Harshita Kajal
Date added: Oct 29, 2019
Date modified : Dec 2, 2019
*/

import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import "./AddRecipe.css";
import {Container, FormLabel, FormControl, FormGroup, Col, Row } from "react-bootstrap"
import Form from "react-bootstrap/FormGroup";

import Button from '@material-ui/core/Button';


export default class AddRecipeUser extends Component {
    constructor(props) {
        super(props);
        this.message = ""
    this.state = {  
    name: "",
    Malt: "",
    Directions: "",
    Hops1:"",
    schedule:"",
    Hops:[],
    HopsSchedule:[],
    Category:"",
    userID: sessionStorage.getItem("username")
  };
  this.uname=sessionStorage.getItem("username")
  if(this.uname==null)
  {
      this.props.history.push('/signin')
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}   

   

handleChange = event => {
  this.setState({
      [event.target.id]: event.target.value,
  });
}


handleSubmit=(event) => {
  const hopsArray = this.state.Hops1.split(',');
  this.state.Hops=hopsArray

    const sArray = this.state.schedule.split(',');
    this.state.HopsSchedule=sArray

    var data = this.state;
    fetch('http://127.0.0.1:5000/myRecipes', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
        userID: data.userID,  
        name: data.name,
        Directions: data.Directions,
        Category:data.Category,
        Malt: data.Malt,
        Hops: data.Hops,
        // Grains: data.Grains,
        HopsSchedule: data.HopsSchedule    
          }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  
        }
    }).then(res => {
        if(res.status===200)
           this.message = 'Recipe added successfully'
    }).catch(err => console.log(err));
  event.preventDefault();           
}


render() {
    return (
        <Container>
            <Card  className="cardMain">
         <Card.Body>
         <Card.Title className="titleCard" >Make your beer!</Card.Title>
         <p>{this.message}</p>
      <Form onSubmit={this.handleSubmit} >
          <Row>
          <Col>
        <FormGroup controlId="name">
                    <FormLabel color="white" >Recipe Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: AmericanPaleAle"
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                </Col>
                <Col> 
        <FormGroup controlId="Malt">
            <FormLabel color="white" >Batch Size</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in gallons (e.g: 10)"
                        value={this.state.Malt}
                        onChange={this.handleChange}
            />
        </FormGroup>

        </Col> 

     
        </Row>
        <div>
               <select id="Category" onChange={this.handleChange} value={this.state.value}>
                  <option value="select">Select Recipe Category</option>
                  <option value="1">ABV less than 5%</option>
                  <option value="2">ABV greater than 5%</option>
                  <option value="none">none</option>
                  
               </select>
               <p></p>
               
         </div>

        <FormGroup controlId="Directions">
            <FormLabel color="white" >Directions</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: Mash at 150˚F for 60 minutes or until conversion is complete. Boil for..."
                        value={this.state.Directions}
                        onChange={this.handleChange}
            />
            <div>Please Enter comma separated values for below fields: </div>
        <FormGroup controlId="Hops1">
                    <FormLabel color="white" >Add Hops and Grains</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="hop1: qty1, hop2: qty2 (e.g: Chinook: 20, Simcoe: 15)"
                        value={this.state.Hops1} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="schedule">
                    <FormLabel color="white">Hops Schedule</FormLabel>
                    <FormControl
                        autoFocus
                        type="text" 
                        placeholder="e.g: Cascade at knockout, Simcoe at 30mins"
                        value={this.state.schedule} 
                        onChange={this.handleChange}
                    />
                </FormGroup>
        </FormGroup>
        <Button onClick = {this.handleSubmit} id="button" type="submit"> Submit </Button>
      </Form>
      </Card.Body>
      </Card>
</Container>
    )
  }
}
