
import React, { Component } from "react";

import './listUser.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import UserListDatatable from "./userListDatatable";
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
        var apiUrl = 'http://127.0.0.1:5000/userProfile'

        fetch(apiUrl,{
            method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                userID: this.state.name,
            }),
                headers: {
                'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['User Details'];

                    this.loading = false;
                    this.items = [result['User Details']];

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
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary" type="submit" >Search</Button>
             </Form>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs

             />: <UserListDatatable items={this.state.items}></UserListDatatable>}



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
