/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  View the recipe details.
  Date Updated: ...
*/

import React, { Component } from "react";
import DataTable from '../ListIngredients/datatable';
import Loader from 'react-loader-spinner';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class recipeList extends Component {
     constructor(props) {
        super(props);
        this.getRecipe = this.getRecipe.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          equipment: [],
          response: {}
        }
        this.equipment = null;
        this.loading = true;
        this.getRecipe();
        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }


      getRecipe=()=>{
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName=CustomAle'
        
          fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
                var data =result['recipeList'];
             this.loading = false;
             var equipment =[];
             
             Object.keys(data).forEach(function(key) {
                 if(key!="_id"){
                  equipment.push([
                    key,data[key]
                 ]);
                 }
                     
            });
           
                 this.setState({
                  equipment: equipment
                });

                const dataArray = Object.keys(this.state.equipment).map(i => this.state.equipment[i])
                this.equipment = dataArray;
                console.log(this.equipment[0]);
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
             <Card.Title className="titleCard" >List of Recipe</Card.Title>
             {this.loading ? <Loader
             type="Circles"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={3000} //3 secs
    
          />: <DataTable items={this.state.equipment}></DataTable>}
    
    
          
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
