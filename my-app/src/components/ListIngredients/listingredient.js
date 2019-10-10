/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import { Button} from "react-bootstrap";
import './listingredient.css';
import Card from 'react-bootstrap/Card';
import TableRow from './TableRow';


import { Container, Row, Col } from 'react-bootstrap';
export default class ListIngredient extends Component {
    constructor(props) {
        super(props);
    this.state = {
      error: null,
      ingredients: [],
      response: {}
    }
    this.getIngredients();


        
    }

 

    handleSubmit=(event)=> {
        console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
        
        event.preventDefault();
      }

      getIngredients=()=>{
          console.log("hi");
            var apiUrl = 'http://127.0.0.1:5000/showIngredient?userID=user1'
          

            fetch(apiUrl)
            .then(res => res.json())
            .then(
              (result) => {
                  var data =JSON.parse(result['IngredientList']);

               var ingredients =[];
               
               Object.keys(data).forEach(function(key) {
                   if(key!="userID" && key!="_id")
                        ingredients.push({
                           key: data[key]
                        });
              });
             
                   this.setState({
                    ingredients: ingredients
                  });
               
               console.log(this.state.ingredients);

              },
              (error) => {
                this.setState({ error });
              }
            )
           

      }

      

      tabRow(){
        return this.state.ingredients.map(function(object, i){
            return (<TableRow obj={object} key={i} />);
        });
      }


    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List of ingredients</Card.Title>
       
        <Button onClick ={this.getIngredients} ></Button>
      
         </Card.Body>
       </Card>
            </Container>
            
            
          
        );
    }

    render() {
        return (
            <div>
                { this.renderList()}
            </div>
        );
    }
}
