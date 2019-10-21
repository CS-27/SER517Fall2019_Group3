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
        this.getRecipe2 = this.getRecipe2.bind(this);
        this.getRecipe3 = this.getRecipe3.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          recipe: [],
          recipe2: [],
          recipe3: [],
          response: {}
        }
        this.recipe = null;
        this.recipe2=null;
        this.recipe3=null;
        this.loading = true;
        this.getRecipe();
        this.getRecipe2();
        this.getRecipe3();
        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }

      getRecipe2=()=>{
        var convention= this.props.value;
        console.log(convention)
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName=CustomAle'
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var recipe2 =[];
             
             Object.keys(data).forEach(function(key) {
                 if(key!="_id"){
                  recipe2.push([
                    key,data[key]
                 ]);
                 }               
            });
           
                 this.setState({
                  recipe2: recipe2
                });

                const dataArray = Object.keys(this.state.recipe2).map(i => this.state.recipe2[i])
                this.recipe2 = dataArray;
                console.log(this.recipe2[0]);
               },
               (error) => {
                 this.setState({ error });
               }
             )
       }
       getRecipe=()=>{
        var convention= this.props.value;
        console.log(convention)
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName=WhiteDogIPA'
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var recipe =[];
             
             Object.keys(data).forEach(function(key) {
                 if(key!="_id"){
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
       getRecipe3=()=>{
        var convention= this.props.value;
        console.log(convention)
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName=WinterWarmer'
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var recipe3 =[];
             
             Object.keys(data).forEach(function(key) {
                 if(key!="_id"){
                  recipe3.push([
                    key,data[key]
                 ]);
                 }               
            });
           
                 this.setState({
                  recipe3: recipe3
                });

                const dataArray = Object.keys(this.state.recipe3).map(i => this.state.recipe3[i])
                this.recipe3 = dataArray;
                console.log(this.recipe3[0]);
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
                <Card.Title className="titleCard" >White Dog IPA</Card.Title>
                {this.loading ? <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
        
            />: <DataTable items={this.state.recipe}></DataTable>}

                </Card.Body>
            </Card>
                {/* </Container>

<Container> */}
<div></div>
      <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
      <Card  className="mainCard">
      <Card.Body className = "card-body">
      <Card.Title className="titleCard" >Custom Ale</Card.Title>
      {this.loading ? <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs

      />: <DataTable items={this.state.recipe2}></DataTable>}
      </Card.Body>
      </Card>
        <div></div>
      <Card  className="mainCard">
      <Card.Body className = "card-body">
      <Card.Title className="titleCard" >Winter Warmer</Card.Title>
      {this.loading ? <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs

      />: <DataTable items={this.state.recipe3}></DataTable>}
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
