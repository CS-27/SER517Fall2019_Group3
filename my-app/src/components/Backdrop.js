import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import './Backdrop.css';
 import Card from 'react-bootstrap/Card';
 import { Container } from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap';

function Backdrop() {
  return (
       
    <div className='bg-image' style={{ width: 'auto' }}>
      <Container>
        <Card className="card-main-one" >
                <Card.Header align="center"><h3>Welcome to Brew Day!</h3></Card.Header>
                <Card.Body>
                <Card.Img style={{ width: '32rem', height:'19rem' }} className="image"   src="/images/7.png" />
                </Card.Body>

        </Card>
      </Container>
    </div>
        );

}

export default Backdrop;






