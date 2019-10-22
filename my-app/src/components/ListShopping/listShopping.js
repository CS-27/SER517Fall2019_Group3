
import React, { Component } from "react";

import './listShopping.css';
import Card from 'react-bootstrap/Card';
import DataTable from '../ListIngredients/datatable';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
export default class ListShopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {}
        }
        this.items = null;
        this.loading = true;
        this.getItems();



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
      
      updateState = (item) => {
        
        const itemIndex = this.state.items.findIndex(data => data[0] === item[0])
        console.log(itemIndex);
        console.log(item);
 
        const newArray = [
          ...this.state.items.slice(0, itemIndex),
          item,
          ...this.state.items.slice(itemIndex + 1)
        ]
        console.log(newArray);
        this.setState({ items: newArray })
      }

    getItems=()=> {
        var apiUrl = 'http://127.0.0.1:5000/showShoppingList?userID=user1'

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result['ShoppingList']);
                    var data = result['ShoppingList'];

                    this.loading = false;
                    var items = [];
                    var userID = ""
                    Object.keys(data).forEach(function (key) {
                        if(key=="userID"){
                            userID = data[key];
                          }
                        if (key != "userID" && key != "_id") {
                            items.push([
                                key, data[key]
                            ]);
                        }

                    });

                    this.setState({
                        userID : userID,
                        items: items
                    });


                    const ingrarray = Object.keys(this.state.items).map(i => this.state.items[i])
                    this.items = ingrarray;
                    console.log(this.items[0]);
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
            <Card  className="mainCardOne">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >Shopping List </Card.Title>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs

             />: <DataTable userID={this.state.userID} items={this.state.items}  updateState={this.updateState}></DataTable>}



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
