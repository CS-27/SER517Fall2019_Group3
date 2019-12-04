/*Author: Jahnavi Bantupalli
Date added: Oct 25 2019
*/
import React, { Component } from "react";
import './whatICanBrew.css';
import Card from 'react-bootstrap/Card';
import Loader from 'react-loader-spinner';
import {Button, Container} from 'react-bootstrap';
import DataTableRecipe from "./DatatableRecipe";
export default class WhatICanBrew extends Component {
   
    constructor(props) {
        super(props);
    this.state = {
      userID: "",
      recipes: [],
    }
    this.recipes= []

        this.uname=sessionStorage.getItem("username")
        if(this.uname==null)
        {
            this.props.history.push('/signin')
        }
    this.loading = true;
    this.getRecipes();
    this.userID = sessionStorage.getItem("username")


        
    }

 

    handleSubmit=(event)=> {
        this.props.history.push('/addingredient')
      }

      getRecipes=()=>{
          var user= sessionStorage.getItem("username");
          this.userID = user
          if(user==null)
          {
              this.props.history.push('/signin')
          }
          else {
              var apiUrl = 'https://backendbeer.herokuapp.com/whatCanIBrewToday'

              fetch(apiUrl, {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  
                  userID : this.userID
                  
                })
              })
                .then(response => response.json())
                .then((result)=>{
             
                  this.loading = false;
                  var array = JSON.parse(result['Recipe addition status']);
                this.recipes = array;
                this.setState({
                  userID: this.userID,
                  recipes: array
              });
                })
                .catch(err => console.log(err))


                
          }

      }

     renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneBrew">
         <Card.Body className = "card-body-brew">
         <Card.Title className="titleCard" >List of Recipes you can Brew</Card.Title>
         {this.loading ?       <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />: 
      <DataTableRecipe items={this.recipes} />
      }
           


      
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
