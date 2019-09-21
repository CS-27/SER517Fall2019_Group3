import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';


import CardDeck from 'react-bootstrap/CardDeck';
/*Author: Jahnavi Bantupalli
Date added: Sep 18, 2019
Date modified : Sept 20, 2019
*/
function About() {
  return (
    <div>
      <header className="about-us">
        About Us
      </header>
     
      <Card bg = "info" className="card-main">
  <Card.Body>
    <Card.Title>Brew More! Worry Less</Card.Title>
    <Card.Text>
       We help home brewers to store their recipes and maintain logs to their recipes and ingredients. 
       We also recommend you the beers you can brew with the ingredients you have.
    </Card.Text>
  </Card.Body>
</Card>
<div>
        <h1 className = "about-us"> <center>Meet the Team</center></h1>
        
</div>
<Container>
  <Row>
  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/logo.png" thumbnail/>
        <Card.Title>Jahnavi Bantupalli</Card.Title>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/logo.png" thumbnail/>
        <Card.Title>Salini Chittineni</Card.Title>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/logo.png" thumbnail/>
        <Card.Title>Harshita Kajal</Card.Title>
      </Card.Body>
    </Card>
  </Col>
  
  </Row>
  <Row>
  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/logo.png" thumbnail/>
        <Card.Title>Srajan</Card.Title>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/logo.png" thumbnail/>
        <Card.Title>Rishab</Card.Title>
      </Card.Body>
    </Card>
  </Col>

  </Row>
</Container>
    </div>
    
  );
}

export default About;
