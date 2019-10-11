/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import { Button} from "react-bootstrap";
import './listingredient.css';
import Card from 'react-bootstrap/Card';
import TableRow from './TableRow';
import DataTable from './datatable';
import Loader from 'react-loader-spinner';
import { Container, Row, Col } from 'react-bootstrap';
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
               
           
               const peopleArray = Object.keys(this.state.ingredients).map(i => this.state.ingredients[i])
               this.ingredients = peopleArray;
               console.log(this.ingredients[0]);
              },
              (error) => {
                this.setState({ error });
              }
            )
           

      }

      

      tabRow(){
        return this.state.ingredients.map(function(object, i){
            return (<TableRow obj={object} key={i} />);
        });
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

      />: <DataTable items={this.state.ingredients}></DataTable>}


      
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
