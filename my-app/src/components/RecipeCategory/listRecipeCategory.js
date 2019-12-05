import React, { Component } from "react";

import './listRecipe.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel,
    CardDeck, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ListRecipeDatatable from "./listRecipeDatatable";
import ListRecipeDatatable2 from "./listRecipeDatatable2";

export default class ListRecipeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {},
            name:"",
            names:[],
            names2:[]
        }
        this.items = null;
        this.loading = true;
        this.names=null;
        this.name=null;
        this.names2=null;

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')
        event.preventDefault();
      }

      

      getItems=(event)=> {
        var apiUrl = 'http://127.0.0.1:5000/allRecipes';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['All Recipes'];
                    var names=[];
                    //var names2=[];

                    this.loading = false;
                    this.items = [result['All Recipes']];

            for(var i=0;i<this.items.length;i++)
            {

                                this.items[i].map((values)=>{
                                    if (values.Category=="1") {
                                
                                        names.push([
                                        values.name
                                            ]);
                                        }
                                })
                                
            }

                    this.setState({
                        items: this.items,
                        names: names
                    });

                    },
                (error) => {
                    this.setState({error});
                }
            )

    }

    getItems2=(event)=> {
        var apiUrl = 'http://127.0.0.1:5000/allRecipes';

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['All Recipes'];
                    var names2=[];

                    this.loading = false;
                    this.items = [result['All Recipes']];
            for(var i=0;i<this.items.length;i++)
            {

                                this.items[i].map((values)=>{
                                    
                                        if (values.Category=="2") {
                                
                                            names2.push([
                                            values.name
                                                ]);
                                            }
                                })
                                
            }

                    this.setState({
                        items: this.items,
                        names2:names2
                    });

                    },
                (error) => {
                    this.setState({error});
                }
            )

    }

   

     renderList() {
        return (
            
            <Container>
                
                     <Card  className="cardMainOne1">
    <Card.Body className ="card-body-2">
        <Card.Title className="card-title">Brew More! Worry Less!</Card.Title>
        <Card.Text >
        <h4>Click on the beer category you wish to view!</h4>
        </Card.Text>
    </Card.Body>
</Card>
                
<CardDeck>
    
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneMain2">
           
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >Beers with Alcohol by Volume less than 5%</Card.Title>
         <Form onSubmit={this.handleSubmit} >
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary"  >View Beers</Button>
                 </Form>
             
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={2000} //2 secs

             /> :
              <ListRecipeDatatable names={this.state.names} deleteItem={this.deleteItem} deleteRecipe={this.deleteRecipe} ></ListRecipeDatatable>}

         </Card.Body>
       </Card>
       
       
       
       
       <Card  className="mainCardOneMain2">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > Beers with Alcohol by Volume more than 5%</Card.Title>
         <Form onSubmit={this.handleSubmit} >
                 <Button onClick ={this.getItems2} id = "btn-color" variant="primary"  >View Beers</Button>
                 
                 </Form>
                 
             
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={2000} //2 secs

             />: <ListRecipeDatatable2 names2={this.state.names2} deleteItem2={this.deleteItem2} deleteRecipe={this.deleteRecipe} ></ListRecipeDatatable2>
     }

              
         </Card.Body>
       </Card>
       </CardDeck>
       
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
