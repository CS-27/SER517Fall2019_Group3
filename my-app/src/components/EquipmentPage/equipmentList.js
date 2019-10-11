/*Author: Salini Chittineni
  Date:   Oct 2, 2019
  About:  This is to render list of equipment oage.
*/
import React, { Component } from "react";
import axios from 'axios';
import './equipmentList.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
export default class equipmentList extends Component {
     constructor(props) {
        super(props);
        this.getEquipment = this.getEquipment.bind(this);
        this.message = ""
      
        this.state = {
          error: null,
          equipment: [],
          response: {}
        }

        
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

      getEquipment(){
            console.log("equipment")
            var apiUrl = 'http://127.0.0.1:5000/showEquipment?userID=user1'
            // axios.get('http://127.0.0.1:5000/showEquipment?userID=user1').
            // then(response=> {
            // //    var data = response.json()
            // //   console.log(response);

            
            
            // });

            fetch(apiUrl)
            .then(res => res.json())
            .then(
              (result) => {
                  var data =JSON.parse(result['equipmeneList']);

               console.log(data['equip1']);
               var equipment =[];
               for (let i = 0; i < 3; i++) {
                    var key = 'equip'+i;
                    equipment.concat(key);
               }
               console.log(this.state.equipment);

              },
              (error) => {
                this.setState(error);
              }
            )
      }




    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCard">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" >Equipment List</Card.Title>
        <Button onClick ={this.getEquipment} ></Button>
      
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