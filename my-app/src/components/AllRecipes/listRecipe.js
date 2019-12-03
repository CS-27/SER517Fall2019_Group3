/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  Listing all available recipes.
  Date Updated: Nov 28, 2019
*/

import React, { Component } from "react";

import './listRecipe.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ListRecipeDatatable from "./listRecipeDatatable";
export default class ListRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {},
            name:"",
            names:[]
        }
        this.items = null;
        this.loading = true;
        this.names=null;
        this.name=null;

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

                    this.loading = false;
                    this.items = [result['All Recipes']];
                    
                    console.log(this.items);
                    console.log(data.length);

                    
            for(var i=0;i<this.items.length;i++)
            {
                                this.items[i].map((values)=>{
                                
                                        names.push([
                                        values.name
                                            ]);   
                                            
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

    deleteItem = (name) => {
         const updatedItems = this.state.names.filter(i => i[0] !== name[0]);
         this.setState({ names: updatedItems })
        }
      
    
      deleteRecipe =(name)=>{
        console.log("in delRecipe")
        console.log(name)
        fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name.toString()
          })
          
        })
        
        .then(() => {
            this.deleteItem(name)
          })
          .catch(err => console.log(err))

      }


    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneMain">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > All Recipes below</Card.Title>
             <Form onSubmit={this.handleSubmit}>
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary" type="submit" >View Beers</Button>
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
