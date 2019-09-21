/*Author: Harshita Kajal
Date added: Sep 17, 2019
Date modified : Sept 21, 2019
*/

import React from 'react';
import { Component } from 'react';
import './Contact.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
//import CardDeck from 'react-bootstrap/CardDeck';

function Contact() {
  return (
  	<div>
      <header className="Contact">
        Contact Us
        </header>
      
     <Card  className="card-main">
  <Card.Body>
    <Card.Text className ="card-body">
       Questions about brewing? Questions on how to use the App? Suggestions for the App? or just want to grab some beer with us
    </Card.Text>
  </Card.Body>
</Card>

<div>
        <h2 className = "Contact"> <center>Contact Us</center></h2>
        
</div>
</div>
);
}

export default Contact;
