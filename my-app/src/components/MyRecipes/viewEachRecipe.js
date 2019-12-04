/*
  Author: Harshita Kajal
  Date Created:   Oct 16, 2019
  About:  View the recipe details.
  Date Updated: ...
*/

import React, { Component } from "react";
import DataTable1 from './myRecipeDetailDatatable';
import { withRouter } from 'react-router'

import './viewEachRecipe.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';



class userListRecipe extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.getRecipe = this.getRecipe.bind(this);
    this.message = ""

    this.state = {
      error: null,
      recipe: [],
      response: {},
      items: []
    }
    this.recipe = null;
    this.loading = true;
    this.items = null;
    this.getRecipe(this.props.name.toString());


  }

  handleSubmit = (event) => {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://backendbeer.herokuapp.com/')

    event.preventDefault();
  }


  getRecipe = (name) => {
    var convention = this.props.value;
    console.log("inside rec")
    console.log(name)
    //console.log(convention)
    var apiUrl = 'https://backendbeer.herokuapp.com/viewMyRecipe?recipeName=' + name + '&userID=' + sessionStorage.getItem("username");


    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          var data = result['Recipe Info'];
          if (data == null)
            return;
          this.loading = false;
          var recipe = [];

          Object.keys(data).forEach(function (key) {
            if (key != "_id" && key != "name" && key != "Category") {
              recipe.push([
                key, data[key]
              ]);
            }
          });

          this.setState({
            recipe: recipe
          });

          const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
          this.recipe = dataArray;
          console.log(this.recipe[0]);
        },
        (error) => {
          //this.setState({ error });
          this.message = 'Error in viewing recipes';
        }
      )
  }

  //   }).then(res => {
  //     if(res.status===200)
  //        this.message = 'Ingredient added successfully'
  //     console.log(res.status) ;
  // }).catch(err => console.log(err));



  addtoShopList = () => {
    var url = 'https://backendbeer.herokuapp.com/addIngredientsShoppingList';
    console.log(this.state.recipe)
    var hops = this.state.recipe[3][1]
    var userID = sessionStorage.getItem("username")

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        hops: hops,
        userID: userID

      })
    })
      .then(response => {

        this.props.history.push('/shoppinglist')



      })

      .catch(err => console.log(err))
  }


  renderList() {
    var convention = this.props.value;
    return (

      <Container>
        <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
        <Card className="mainCard">
          <Card.Body className="card-body">
            <Card.Title className="titleCard" >{this.props.name}</Card.Title>
            <DataTable1 items={this.state.recipe}></DataTable1>
            <Button id="btn-color" onClick={this.addtoShopList}>Add ingredients to shopping list</Button>
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

export default withRouter(userListRecipe);


