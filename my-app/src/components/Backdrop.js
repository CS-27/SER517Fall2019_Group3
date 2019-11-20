import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import './Backdrop.css';
 import Card from 'react-bootstrap/Card';
 import { Container } from 'react-bootstrap';
// import ExampleComponent from "react-rounded-image";
//import img1 from "./logo_new.png";
import {Row, Col } from 'react-bootstrap';

function Backdrop() {
  return (
        // <div className= 'Contact'>
        // <header align='center'><h1>Contact Us</h1></header>
        // <div className='ContactClass'>
        // <Row>
        // <Col xs={6} md={4} sm={3}>
          
        // <div className='card shadow'>
        //   <div className='overflow'>
        //     <img src= className='card-img-top' />
        //   </div>
        //   <div className='card-body'>
        //     <h4 className='card-title text-secondary' align='center'>Email US</h4>
        //     <p align='center' className='card-content'>
        //       beerLife@gmail.com
        //     </p>
        //   </div>
        //   </div>
        //   </Col>
          
        //   </Row>
        //   </div>
        // </div>
    <div className='bg-image' style={{ width: 'auto' }}>
      <Container>
        <Card className="card-main-one" >
                <Card.Header align="center"><h3>Welcome to BrewDay!</h3></Card.Header>
                <Card.Body>
                <Card.Img style={{ width: '30rem', marginLeft:'7rem', height:'20rem' }}  variant="top" src="/images/7.png" />
                </Card.Body>
                

          {/* <Card.Body>
            <Card.Title className="card-title">Stop thinking! Start Brewing!</Card.Title>
            <Card.Text className="card-body">
             BREW. </Card.Text>
             <Card.Text className="card-body"> SHARE.</Card.Text>
             <Card.Text className="card-body"> HAVE FUN.</Card.Text>

          </Card.Body> */}
        </Card>
      </Container>
    </div>
//     <Container className='newImage' >

//     <div>
//         <ExampleComponent  image="/images/logo_new.png"
//          imageWidth="650"
//          imageHeight="350"
//         />
        
//         </div>
// </Container>


        );

}

export default Backdrop;






