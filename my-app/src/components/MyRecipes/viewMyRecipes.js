/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  View the recipe details.
  Date Updated: ...
*/

import React, { Component } from "react";
import DataTable from './myRecipeListDatatable';
import Loader from 'react-loader-spinner';
import './viewMyRecipes.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class viewMyRecipes extends Component {
     constructor(props) {
        super(props);
        this.getRecipe = this.getRecipe.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          recipe: [],
          response: {},
          items: []
        }
        this.recipe = null;
        this.loading = true;
        this.items=null;
        this.getRecipe();

        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }


       getRecipe=()=>{
        var convention= this.props.value;
        console.log("inside rec")
     
        //console.log(convention)
        var apiUrl = 'http://127.0.0.1:5000/viewMyRecipes?userID='+sessionStorage.getItem("username");
       
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['My Recipe List'];
             this.loading = false;
             var recipe =[];
             
             data.forEach(function(key) {
                
                  recipe.push(
                    key
                 );
                               
            });
           
                 this.setState({
                  recipe: recipe
                });
                  this.recipe = recipe;
                // const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
                // this.recipe = dataArray;
                // console.log(this.recipe[0]);
                console.log(data);
               },
               (error) => {
                 this.setState({ error });
               }
             )
       }


       render() {
        return (
            <div>
                { this.renderList()}
            </div>
        );
    }
         renderList() {
            var convention= this.props.value;
            return (
                
                <Container>
                        <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                    <Card  className="mainCard">
                <Card.Body className = "card-body">
                  Helooooo
                <Card.Title className="titleCard" >{this.props.name}</Card.Title>
                <DataTable items={this.state.recipe}></DataTable>
                </Card.Body>
            </Card>
</Container>
                
            );
        }
    
       
    }
