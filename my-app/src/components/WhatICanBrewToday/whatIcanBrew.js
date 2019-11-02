/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import './listingredient.css';
import Card from 'react-bootstrap/Card';
import DataTable from './datatable';
import Loader from 'react-loader-spinner';
import {Button, Container} from 'react-bootstrap';
export default class WhatICanBrew extends Component {
   
    constructor(props) {
        super(props);
    this.state = {
      error: null,
      userID: "",
      ingredients: [],
      response: {}
    }

        this.uname=sessionStorage.getItem("username")
        if(this.uname==null)
        {
            this.props.history.push('/signin')
        }
    this.ingredients = null;
    this.loading = true;
    this.getRecipes();
    



        
    }

 

    handleSubmit=(event)=> {
        this.props.history.push('/addingredient')
      }

      getRecipes=()=>{
          var user= sessionStorage.getItem("username");
          if(user==null)
          {
              this.props.history.push('/signin')
          }
          else {
              var apiUrl = 'http://127.0.0.1:5000/whatICanBrew=' + user

              fetch(apiUrl)
                  .then(res => res.json())
                  .then(
                      (result) => {

                        this.loading = false;

                      },
                      (error) => {
                          this.setState({error});
                      }
                  )
          }

      }

     renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOne">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List of ingredients</Card.Title>
         {this.loading ?       <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />: <DataTable itemType="ingredient" userID ={this.state.userID} items={this.state.ingredients} updateState={this.updateState} deleteItem = {this.deleteItem} deleteIngredient = {this.deleteIngredient}></DataTable>}
             <Button onClick = {this.handleSubmit}  id = "btn-color" type="submit" >Add Item</Button>


      
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
