/*Author: Harshita Kajal
Date added: Sep 17, 2019
Date modified : Sept 22, 2019
*/

  import React, {Component} from "react";
  import "./Contact.css";
  import {Row, Col } from 'react-bootstrap';
  import img1 from "./email.jpg";
  import img2 from "./Call.png";
  import img3 from "./Maps.png";

 function Contact() {
      return (
      <div className= 'Contact'>
      <header align='center'><h1>Contact Us</h1></header>
      <div className='ContactClass'>
      <Row>
      <Col xs={6} md={4} sm={3}>
        
      <div className='card shadow'>
        <div className='overflow'>
          <img src={img1} className='card-img-top' />
        </div>
        <div className='card-body'>
          <h4 className='card-title text-secondary' align='center'>Email US</h4>
          <p align='center' className='card-content'>
            beerLife@gmail.com
          </p>
        </div>
        </div>
        </Col>
        <Col xs={6} md={4} sm={3}>
        <div className='card shadow'>
        <div className='overflow'>
          <img className='card-img-top' src={img2} />
        </div>
        <div className='card-body'>
          <h4 className='card-title text-secondary' align='center'>Call US</h4>
          <p align='center' className='card-content'>
            +1 (951)-555-1234
          </p>
        </div>
        </div>
        </Col>

        <Col xs={6} md={4} sm={3}>
        <div className='card shadow'>
        <div className='overflow'>
        <img className='card-img-top' src={img3} /> 
      </div>
        <div className='card-body'>
          <h4 className='card-title text-secondary' align='center'>Visit US</h4>
          <p align='center' className='card-content'>
           ASU Polytechnic!
          </p>
        </div>
        </div>
        </Col>
        </Row>
        </div>
      </div>
    );
  };
   
  export default Contact

