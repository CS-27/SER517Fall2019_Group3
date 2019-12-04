/*
  Author: Rishab Mantri
  Date Created:   Nov 5, 2019
  About:  View the user details.
  Date Updated: ...
*/

import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import './showUser.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Table} from "reactstrap";

export default class showUserList extends Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
        this.message = ""

        this.state = {
            error: null,
            recipe: [],
            response: {},
            items: [],
            user : {}
        }
        this.recipe = null;
        this.loading = true;
        this.items=null;
        this.getProfile(this.props.userID.toString());


    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://backendbeer.herokuapp.com/')

        event.preventDefault();
    }


    getRecipe=(name)=>{
        var convention= this.props.value;
        console.log("inside rec")
        var apiUrl = 'https://backendbeer.herokuapp.com/userProfile'

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    var data =result['recipeList'];
                    this.loading = false;
                    var recipe =[];

                    Object.keys(data).forEach(function(key) {
                        if(key!="_id" && key!="name"){
                            recipe.push([
                                key,data[key]
                            ]);
                        }
                    });

                    this.setState({
                        recipe: recipe
                    });

                    const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
                    this.recipe = dataArray;
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    getProfile=(userid)=>{

            var apiUrl = 'https://backendbeer.herokuapp.com/userProfile'
            fetch(apiUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    userID : userid

                })
            })
                .then(response => response.json())
                .then(res => {
                    this.loading = false;
                    var person =res['User Details'];
                    this.setState({user:person})
                });




        }


    renderList() {
        return (

            <Container>
                <span class="iconify"  data-inline="false"></span>
                <Card  className="mainCardOne">
                    <Card.Body className = "card-body">

                        <Card.Title className="card-title">Profile</Card.Title>
                        {this.loading ? <Loader
                            type="Circles"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs

                        />:(
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.user.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.user.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.user.email}</td>
                                </tr>
                                <tr>
                                    <td>User id</td>
                                    <td>{this.state.user.userID}</td>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </Table>
                        )}

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

