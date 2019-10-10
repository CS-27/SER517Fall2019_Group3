/*Author: Salini Chittineni
  Date:   Oct 2, 2019
  About:  This is to render list of equipment oage.
*/
import React, { Component } from "react";

// import './equipmentList.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
export default class equipmentList extends Component {
    constructor(props) {
        super(props);
        this.message = ""
        this.state = {
            // isLoading: false,
            name:"",
            quantity:"",
            user: null
        };

        
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


    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >List ingredient </Card.Title>

      
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