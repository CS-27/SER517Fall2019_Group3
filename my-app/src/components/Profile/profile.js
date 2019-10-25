/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import './profile.css';
import Card from 'react-bootstrap/Card';

import { Container } from 'react-bootstrap';
export default class Profile extends Component {
   
    constructor(props) {
        super(props);
    
        
    }

 



      getProfile=()=>{
            var apiUrl = 'http://127.0.0.1:5000/showIngredient?userID=user1'

        
      }

 
    renderList() {
        return (
            
            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOne">
         <Card.Body className = "card-body">
         



      
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
