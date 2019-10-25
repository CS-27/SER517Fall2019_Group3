
import React, { Component } from "react";
import {Form,
    FormGroup,
    FormControl,
    FormLabel, Button
} from "react-bootstrap";
import './shoppingPage.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
export default class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.message = ""
        this.state = {
            // isLoading: false,
            name:"",
            quantity:"",
            userID: sessionStorage.getItem("username")
        };
        this.uname=sessionStorage.getItem("username")
        if(this.uname==null)
        {
            this.props.history.push('/signin')
        }


    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        var data = this.state;
        console.log(data);


        fetch('http://127.0.0.1:5000/addShoppingList', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                userID: data.userID,
                [data.name] : data.quantity

            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

            }
        }).then(res => {
            if(res.status===200)
                this.message = 'Item added successfully'
            console.log(res.status) ;
        }).catch(err => console.log(err));
        // axios.post('http://127.0.0.1:5000/addIngredient', this.state).
        // then(response=> {

        // console.log(response);




        event.preventDefault();
    }



    renderForm() {
        return (
            <Container>
                <Card  className="mainCardOne">
                    <Card.Body className = "card-body">
                        <Card.Title className="titleCard" >Add an Item </Card.Title>

                        <p>{this.message}</p>
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
                            <FormGroup controlId="quantity">
                                <FormLabel>Quantity</FormLabel>
                                <FormControl
                                    autoFocus
                                    type="Text"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button onClick ={this.handleSubmit} id = "btn-color" variant="primary" type="submit" >Add Item</Button>


                        </Form>
                    </Card.Body>
                </Card>
            </Container>



        );
    }

    render() {
        return (
            <div>
                { this.renderForm()}
            </div>
        );
    }
}
