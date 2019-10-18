/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import './listingredient.css';
import Card from 'react-bootstrap/Card';
import DataTable from './datatable';
import Loader from 'react-loader-spinner';
import { Container } from 'react-bootstrap';
export default class ListIngredient extends Component {
   
    constructor(props) {
        super(props);
    this.state = {
      error: null,
      ingredients: [],
      response: {}
    }
    this.ingredients = null;
    this.loading = true;
    this.getIngredients();
    



        
    }

 

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
        
        event.preventDefault();
      }

      getIngredients=()=>{
            var apiUrl = 'http://127.0.0.1:5000/showIngredient?userID=user1'

            fetch(apiUrl)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result['IngredientList']);
                  var data =result['IngredientList'];
                  
                this.loading = false;
               var ingredients =[];
               
               Object.keys(data).forEach(function(key) {
                   if(key!="userID" && key!="_id"){
                    ingredients.push([
                      key,data[key]
                   ]);
                   }
                       
              });
             
                   this.setState({
                    ingredients: ingredients
                  });
               
           
               const ingrarray = Object.keys(this.state.ingredients).map(i => this.state.ingredients[i])
               this.ingredients = ingrarray;
               console.log(this.ingredients[0]);
              },
              (error) => {
                this.setState({ error });
              }
            )
           

      }

      updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.id === item.id)
        const newArray = [
        // destructure all items from beginning to the indexed item
          ...this.state.items.slice(0, itemIndex),
        // add the updated item to the array
          item,
        // add the rest of the items to the array from the index after the replaced item
          ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({ items: newArray })
      }

    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List of ingredients</Card.Title>
         {this.loading ?       <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />: <DataTable items={this.state.ingredients} updateState={this.updateState}></DataTable>}


      
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
