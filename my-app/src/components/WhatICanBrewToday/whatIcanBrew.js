/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import './whatICanBrew.css';
import Card from 'react-bootstrap/Card';
import Loader from 'react-loader-spinner';
import {Button, Container} from 'react-bootstrap';
export default class WhatICanBrew extends Component {
   
    constructor(props) {
        super(props);
    this.state = {
      userID: "",
      recipes: [],
    }

        this.uname=sessionStorage.getItem("username")
        if(this.uname==null)
        {
            this.props.history.push('/signin')
        }
    this.ingredients = null;
    this.loading = true;
    this.getRecipes();
    this.userID = sessionStorage.getItem("username")



        
    }

 

    handleSubmit=(event)=> {
        this.props.history.push('/addingredient')
      }

      getRecipes=()=>{
          var user= sessionStorage.getItem("username");
          console.log(user)
          this.userID = user
          console.log(this.userID)
          if(user==null)
          {
              this.props.history.push('/signin')
          }
          else {
              var apiUrl = 'http://127.0.0.1:5000/whatCanIBrewToday'

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
                  this.setState({
                    userID: this.userID,
                    recipes: result['Recipe addition status']
                });
                console.log(this.state.recipes)
                this.loading = false
                })
                
                .catch(err => console.log(err))
          }

      }

     renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOne">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List of Recipes you can Brew</Card.Title>
          


      
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
