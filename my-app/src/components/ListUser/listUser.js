
import React, { Component } from "react";

import './listUser.css';
import Card from 'react-bootstrap/Card';
import DataTable from '../ListIngredients/datatable';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
export default class ListUser extends Component {
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
        // this.getItems();



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

    getItems=(name)=> {
        var apiUrl = 'http://127.0.0.1:5000/showUserList?name='+name

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result['UserList']);
                    var data = result['UserList'];

                    this.loading = false;
                    var items = [];

                    // Object.keys(data).forEach(function (key) {
                    //     if (key != "userID" && key != "_id") {
                    //         items.push([
                    //             key, data[key]
                    //         ]);
                    //     }
                    //
                    // });

                    this.setState({
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
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >User List </Card.Title>
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
                 <Button onClick ={this.getItems(this.state.name)} id = "btn-color" variant="primary" type="submit" >Search</Button>
             </Form>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs

             />: <DataTable items={this.state.items}></DataTable>}



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
