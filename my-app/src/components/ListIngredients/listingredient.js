/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import { Button} from "react-bootstrap";
import './listingredient.css';
import Card from 'react-bootstrap/Card';
import axios from "axios";

import { Container, Row, Col } from 'react-bootstrap';
export default class ListIngredient extends Component {
    constructor(props) {
        super(props);
    this.state = {
      error: null,
      ingredients: [],
      response: {}
    }

        
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
      }

      getIngredients(){
            console.log("ingredients")
            var apiUrl = 'http://127.0.0.1:5000/showIngredient?userID=user1'
            axios.get('http://127.0.0.1:5000/showIngredient?userID=user1').
            then(response=> {
            //    var data = response.json()
            //   console.log(response);

            
            
            });

            fetch(apiUrl)
            .then(res => res.json())
            .then(
              (result) => {
                  var data =JSON.parse(result['IngredientList']);

               var ingredients =[];
               console.log(data);
               Object.keys(data).forEach(function(key) {
                   if(key!="userID" && key!="_id")
                        ingredients.push(data[key]);
              });
            //    for (let i = 1; i <=3; i++) {
            //         var key = 'ingredient'+i;
            //        ingredients.push({
            //            key: data[key]
            //        });
            //     //    this.setState({
            //     //     ingredients: ingredients
            //     //   });
            //    }
               console.log(ingredients)

              },
              (error) => {
                this.setState({ error });
              }
            )
           

      }




    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List ingredient </Card.Title>
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
