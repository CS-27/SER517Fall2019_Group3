import React from 'react';
import './beerStatus.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';

/*Author: Salini Chittineni
Date added: Oct 16, 2019
Date modified : 
*/
function beerStatus() {
  return (

    <div>

      <div className="status">
        ABOUT
      </div>
     <Container>
     <Card  className="mainCardOne">
  <Card.Body className ="bodyCardOne">
    <Card.Title className="titleCard">Brew More! Worry Less!</Card.Title>
    <Card.Text >
      Beer Brewing Status
    </Card.Text>
  </Card.Body>
</Card>
     </Container>

    </div>
    
  );
}

export default beerStatus;
