/*
  Author: Harshita Kajal
  Date:   Oct 16, 2019
  About:  View the recipe details.
*/
import React, { Component } from "react";
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

    //handle submit


      //gethere
   
         renderList() {
            return (
                
                <Container>
                    <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                <Card  className="mainCard">
             <Card.Body className = "card-body">
             <Card.Title className="titleCard" >List of Equipment</Card.Title>
             {this.loading ?       <Loader
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
