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
        //console.log(this.state);
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
                    
                    console.log(this.items);
                    console.log(data.length);

                    
            for(var i=0;i<this.items.length;i++)
            {

                                this.items[i].map((values)=>{
                                    if (values.Category=="1") {
                                
                                        names.push([
                                        values.name
                                            ]);
                                        }
                                        // if (values.Category=="2") {
                                
                                        //     names2.push([
                                        //     values.name
                                        //         ]);
                                        //     }

                                        
                                            
                                })
                                
            }
                    

                    this.setState({
                        items: this.items,
                        names: names
                        //names2:names2
                    });

                    //console.log(names);


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
                    //var names=[];
                    var names2=[];

                    this.loading = false;
                    this.items = [result['All Recipes']];
                    
                    console.log(this.items);
                    console.log(data.length);

                    
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
                        // names: names,
                        names2:names2
                    });

                    //console.log(names);


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
                
                <Col xs={6} md={4}>
                    
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneMain">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > Recipe Category</Card.Title>
         <Form onSubmit={this.handleSubmit} >
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary"  >View Category1</Button>
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
       </Col>
       <Col xs={6} md={4}>
       
       <Card  className="mainCardOneMain">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > Click on the Category you wish to view</Card.Title>
         <Form onSubmit={this.handleSubmit} >
                 <Button onClick ={this.getItems2} id = "btn-color" variant="primary"  >View Category 2</Button>
                 
                 </Form>
                 
             
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={2000} //2 secs

             />: <ListRecipeDatatable names2={this.state.names2} deleteItem={this.deleteItem} deleteRecipe={this.deleteRecipe} ></ListRecipeDatatable>
     }

              
         </Card.Body>
       </Card>
       
       </Col>
       
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
