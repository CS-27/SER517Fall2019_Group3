/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  View the recipe details.
  Date Updated: Nov 28, 2019
*/

import React, { Component } from "react";
import DataTable from './datatable';
import { withRouter } from 'react-router'

import './showRecipe.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ListRecipeDatatable from "./listRecipeDatatable";


class recipeList extends Component {
     constructor(props) {
        super(props);
        console.log(this.props)
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
        this.getRecipe(this.props.name.toString());

        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }


       getRecipe=(name)=>{
        var convention= this.props.value;
        console.log("inside rec")
        console.log(name)
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName='+name
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var recipe =[];
             
             Object.keys(data).forEach(function(key) {
                 if(key!="_id" && key!="name" && key!="Category"){
                  recipe.push([
                    key,data[key]
                 ]);
                 }               
            });
           
                 this.setState({
                  recipe: recipe
                });

                const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
                this.recipe = dataArray;
                console.log(this.recipe[0]);
               },
               (error) => {
                 this.setState({ error });
               }
             )
       }
       addtoShopList=()=>{
        var url = 'http://127.0.0.1:5000/addIngredientsShoppingList';
       
          var hops = this.state.recipe[1][1]
          console.log(hops)
          var userID=sessionStorage.getItem("username")

          fetch(url, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              
              hops: hops,
              userID : userID
              
            })
          })
            .then(response => {
              console.log(response.status)
              if(response.status == 200)
                alert("Added item to shop list")
              else
              alert("Item already in  shop list")
              this.props.history.push('/shoppinglist')

            })
            
            .catch(err => console.log(err))
       }

        
         renderList() {
            var convention= this.props.value;
            return (
                
                <Container>
                        <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                    <Card  className="mainCard">
                <Card.Body className = "card-body">
                <Card.Title className="titleCard" >{this.props.name}</Card.Title>
                <DataTable items={this.state.recipe}></DataTable>
                <Button id ="btn-color" onClick = {this.addtoShopList}>Add ingredients to shopping list</Button>
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

    export default withRouter(recipeList);


