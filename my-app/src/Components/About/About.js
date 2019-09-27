import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';


import CardDeck from 'react-bootstrap/CardDeck';
/*Author: Jahnavi Bantupalli
Date added: Sep 18, 2019
Date modified : Sept 23, 2019
*/
function About() {
  return (

    <div>

      <div className="about-us">
        ABOUT
      </div>
     <Container>
     <Card  className="card-main">
  <Card.Body>
    <Card.Title className="card-title">Brew More! Worry Less!</Card.Title>
    <Card.Text className ="card-body">
       Our mission is to help home brewers to store their recipes and maintain logs to their recipes and ingredients. 
       We also recommend you the beers you can brew with the ingredients you have.
    </Card.Text>
  </Card.Body>
</Card>
     </Container>

<div>
        <h1 className = "about-us"> <center>MEET THE TEAM</center></h1>
        
</div>
<Container>
  <Row>
  <Col xs={6} md={4}>
    <Card>
      <Card.Body>
        <Image src="/images/Jahnavi_Bantupalli.jpg" thumbnail/>
        <Card.Title>Jahnavi Bantupalli</Card.Title>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6} md={4}>
    <Card >
      <Card.Body>
        <Image class ="thumbnail" src="/images/Shalini_chittineni.jpg" thumbnail/>
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
        <Image src="/images/srajan.jpeg" thumbnail/>
        <Card.Title>Srajan Gupta</Card.Title>
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
