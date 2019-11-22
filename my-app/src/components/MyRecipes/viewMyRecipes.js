
import React, { Component } from "react";

import './viewMyRecipes.css';
import Card from 'react-bootstrap/Card';
import {
    Container, Row, Col, Button, Form,
    FormGroup,
    FormControl,
    FormLabel,
} from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ListRecipeDatatable from "./myRecipeListDatatable";
export default class ViewMyRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {},
            name: "",
            names: [],
            userID: sessionStorage.getItem("username")
        };
        this.uname=sessionStorage.getItem("username")
        if(this.uname==null)
        {
            this.props.history.push('/signin')
        }
        this.items = null;
        this.loading = true;
        this.names = null;
        this.name = null;
        this.getItems();

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        //console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
    }

    getItems = (event) => {
        var apiUrl = 'http://127.0.0.1:5000/viewMyRecipes?userID=' + sessionStorage.getItem("username");

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['My Recipe List'];
                    var names = [];

                    this.loading = false;
                    this.items = [result['My Recipe List']];

                    console.log(this.items);
                    console.log(data.length);


                    for (var i = 0; i < this.items.length; i++) {

                        this.items[i].map((values) => {

                            names.push([
                                values.name
                            ]);


                        })

                    }

                    // this.state.names=names
                    // this.state.items=items

                    this.setState({
                        items: this.items,
                        names: names
                    });


                },
                (error) => {
                    this.setState({ error });
                }
            )

    }

    deleteItem = (name) => {
        const updatedItems = this.state.names.filter(i => i[0] !== name[0]);
        this.setState({ names: updatedItems })
    }


    deleteRecipe = (name) => {
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
                <Card className="mainCardOneMain">
                    <Card.Body className="card-body">
                        <Card.Title className="titleCard" > My Recipes below</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Button onClick={this.getItems} id="btn-color" variant="primary"  > View all Beers</Button>
                        </Form>
                        {this.loading ? <Loader
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
                {this.renderList()}
            </div>
        );
    }
}
