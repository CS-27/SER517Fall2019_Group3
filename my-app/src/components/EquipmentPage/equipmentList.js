/*Author: Salini Chittineni
  Date:   Oct 2, 2019
  About:  This is to render list of equipment oage.
*/
import React, { Component } from "react";
import axios from 'axios';
// import './equipmentList.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DataTable from '../ListIngredients/datatable';
import Loader from 'react-loader-spinner';
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
        this.equipment = null;
        this.loading = true;
        this.getEquipment();
        
    }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    handleSubmit=(event)=> {
        //console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
      }

      getEquipment=()=>{
          var apiUrl = 'http://127.0.0.1:5000/showEquipment?userID=user1'
          
            fetch(apiUrl)
            .then(res => res.json())
            .then(
              (result) => {
                  var data =JSON.parse(result['equipmentList']);
               this.loading = false;
               var equipment =[];
               
               Object.keys(data).forEach(function(key) {
                   if(key!="userID" && key!="_id"){
                    equipment.push([
                      key,data[key]
                   ]);
                   }
                       
              });
             
                   this.setState({
                    equipment: equipment
                  });

                  const dataArray = Object.keys(this.state.equipment).map(i => this.state.equipment[i])
                  this.equipment = dataArray;
                  console.log(this.equipment[0]);
                 },
                 (error) => {
                   this.setState({ error });
                 }
               )
              
   
         }
   
         renderList() {
            return (
                
                <Container>
                    <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                <Card  className="mainCard">
             <Card.Body className = "card-body">
             <Card.Title className="titleCard" >List of Equipment</Card.Title>
             {this.loading ?       <Loader
             type="Circles"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={3000} //3 secs
    
          />: <DataTable items={this.state.equipment}></DataTable>}
    
    
          
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