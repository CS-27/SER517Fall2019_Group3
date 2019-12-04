/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import "./AddRecipe.css";
import {Container, FormLabel, FormControl, FormGroup, Col, Row } from "react-bootstrap"
import Form from "react-bootstrap/FormGroup";
import Button from '@material-ui/core/Button';


export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.message = ""
    this.state = {  
    name: "",
    BatchSize: "",
    Directions: "",
    Hops1:"",
    schedule:"",
    Hops:[],
    HopsSchedule:[],
    Category:"",
    errors: {
        name:'',
        BatchSize:'',
        Directions:'',
        Hops1: '',
        schedule: '',
        grain:'',
        Temp:''
      }
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
  const  name = event.target.id;
        const value = event.target.value;
        let errors = this.state.errors;
        const re = /^-?\d*(\.\d+)?$/;
        switch (name) {
            case 'BatchSize': 
            errors.BatchSize = 
                value.length == 0
                ? 'Batch Size is required'
                :re.test(value)?'':'Batch size must be a number/decimal';
            break;
            case 'name': 
            errors.name = 
            value.length == 0
            ? 'Name  is required'
            : '';
            break;
            case 'Directions': 
            errors.Directions = 
                value.length == 0
                ? 'Directions is required'
                : '';
            break;
            case 'Hops1': 
            errors.Hops1 = 
            value.length == 0
            ? 'Hops  is required'
            : '';
            break;
            case 'schedule': 
            errors.schedule = 
            value.length == 0
            ? 'Schedule  is required'
            : '';
            break;
            case 'grain': 
            errors.grain = 
            value.length == 0
            ? 'Grain  is required'
            : '';
            break;
            default:
            break;
            }
            this.setState({errors, [name]: value}, ()=> {
                console.log(errors)
            })
    
}


handleSubmit=(event) => {
  const hopsArray = this.state.Hops1.split(',');
    this.state.Hops= hopsArray
    const sArray = this.state.schedule.split(',');
    this.state.HopsSchedule= sArray
    var data = this.state;

    fetch('https://backendbeer.herokuapp.com/addRecipe', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
        name: data.name,
        Directions: data.Directions,
        Category:data.Category,
        BatchSize: data.BatchSize,
        Hops: data.Hops,
        // Grains: data.Grains,
        HopsSchedule: data.HopsSchedule    
          }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://backendbeer.herokuapp.com',
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
         <Card.Body className="cardbodyRecipe" >
         <Card.Title className="titleCard" >Make your beer!</Card.Title>
         <p className="error-message">{this.state.errors.name}</p>
            <p className="error-message">{this.state.errors.BatchSize}</p> 
             <p className="error-message">{this.state.errors.Directions}</p>
            <p className="error-message">{this.state.errors.grain}</p>
            <p className="error-message">{this.state.errors.schedule}</p>
            <p className="error-message">{this.state.errors.Hops1}</p>
            <p className="error-message">{this.state.errors.Temp}</p>

      <Form >
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
        <FormGroup controlId="BatchSize">
            <FormLabel color="white" >Batch Size</FormLabel>
            <FormControl
                        autoFocus
                        type="text" 
                        placeholder="in gallons (e.g: 10)"
                        value={this.state.BatchSize}
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
            <div><h5>Please Enter comma separated values for below fields: </h5></div>
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
    
        <Button disabled ={this.state.errors.name!='' || 
    this.state.errors.Temp !=''|| this.state.errors.BatchSize !=''
    || this.state.errors.Directions!='' || this.state.errors.Hops1!=''
    ||this.state.errors.schedule!='' ||this.state.errors.grain !=''  } onClick = {this.handleSubmit} id="button" type="submit"> Submit </Button>
      </Form>
      </Card.Body>
      </Card>
</Container>
    )
  }
}
