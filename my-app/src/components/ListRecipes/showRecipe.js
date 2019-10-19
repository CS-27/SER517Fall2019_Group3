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
        this.getEquipment = this.getEquipment.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          recipe: [],
          response: {}
        }
        this.recipe = null;
        this.loading = true;
        
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
    
        event.preventDefault();
      }


      //gethere
   
         renderList() {
            return (
                
                <Container>
                    <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                <Card  className="mainCard">
             <Card.Body className = "card-body">
             <Card.Title className="titleCard" >List of Equipment</Card.Title>
             {this.loading ? <Loader
             type="Circles"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={3000} //3 secs
    
          />: <DataTable items={this.state.recipe}></DataTable>}
    
    
          
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
