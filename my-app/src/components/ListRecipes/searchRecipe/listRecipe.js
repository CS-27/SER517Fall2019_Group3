
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
            name:""
        }
        this.items = null;
        this.loading = true;



    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
      }

    getItems=(event)=> {
        var apiUrl = 'http://127.0.0.1:5000/showRecipe?recipeName='+this.state.name;

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result['Auto ShoppingList']);
                    var data = result['recipeList'];

                    this.loading = false;
                    this.items = [result['recipeList']];

                    Object.keys(data).forEach(function (key) {

                    });

                    this.setState({
                        items: this.items
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
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneMain">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >Recipe List </Card.Title>
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="name"  >
                     <FormLabel>Name</FormLabel>
                     <FormControl
                         autoFocus
                         type="Text"
                         value={this.state.name}
                         onChange={this.handleChange}
                     />
                 </FormGroup>
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary" type="submit" >Search</Button>
             </Form>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs

             />: <ListRecipeDatatable items={this.state.items}></ListRecipeDatatable>}



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
