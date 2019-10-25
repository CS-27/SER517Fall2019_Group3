/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  View the recipe details.
  Date Updated: ...
*/

import React, { Component } from "react";
import DataTable from './datatable';
import Loader from 'react-loader-spinner';
import './showRecipe.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class recipeList extends Component {
     constructor(props) {
        super(props);
        this.getRecipe = this.getRecipe.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          name:"",
          recipe: [],
          response: {}
        }
        this.recipe = null;
        this.loading = true;
        this.getRecipe();

        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }

      deleteItem = (item) => {
        console.log(item);
        const updatedItems = this.state.recipe.filter(i => i[0] !== item[0]);
        this.setState({ recipe: updatedItems })

      }




      deleteRecipe =(name)=>{
        fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name
            //[item[0]]:item[1]
          })
        })
          .then(() => {
            this.deleteItem(name)
          })
          .catch(err => console.log(err))
      }



       getRecipe=()=>{
        var convention= this.props.value;
        console.log(convention)
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName=WinterWarmer'
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var recipe =[];
             var name="";
             
             Object.keys(data).forEach(function(key) {
              if(key=="name"){
                name = data[key];
              }
              if(key!="_id" && key!="name"){
               recipe.push([
                 key,data[key]
              ]);
              }               
         });
                 this.setState({
                  recipe: recipe,
                  name:name

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
        
         renderList() {
            var convention= this.props.value;
            return (
                
                <Container>
                        <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                    <Card  className="mainCard">
                <Card.Body className = "card-body">
                <Card.Title className="titleCard" >Winter Warmer</Card.Title>
                {this.loading ? <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
        
            />: <DataTable items={this.state.recipe} ></DataTable>}

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
