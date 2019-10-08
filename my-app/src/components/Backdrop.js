import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import './Backdrop.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';




function Backdrop() {

 
  return (
    <div className='bg-image' style={{ width: 'auto' }}>
      <Container>
        <Card className="card-main-one">
          <Card.Body>
            <Card.Title className="card-title">Stop thinking! Start Brewing!</Card.Title>
            <Card.Text className="card-body">
             BREW. </Card.Text>
             <Card.Text className="card-body"> SHARE.</Card.Text>
             <Card.Text className="card-body"> HAVE FUN.</Card.Text>

          </Card.Body>
        </Card>
      </Container>
    </div>


        );

}

export default Backdrop;
