/*Author: Harshita Kajal
Date added: Sep 17, 2019
Date modified : Sept 22, 2019
*/

  import React from "react";
  import "./style-card.css";
  import {Row, Col } from 'react-bootstrap';
  import img1 from "./email.jpg";
  import img2 from "./Call.png";

  function Contact() {
    return (
      <div className= 'Contact'>
      <header align='center'><h1>Contact Us</h1></header>
      <Row>
      <Col xs={6} md={4} sm={3}>
      <div className='card shadow'>
        <div className='overflow'>
          <img src={img1} alt='Image 1' className='card-img-top' />
        </div>
        <div className='card-body text-dark'>
          <h4 className='card-title' align='center'>Email US</h4>
          <p className='card-content text-secondary'>
            beer_for_life@gmail.com
          </p>
        </div>
        </div>
        </Col>
    <Col xs={6} md={4} sm={3}>
    <div className='card shadow'>
        <div className='overflow'>
          <img src={img2} alt='Image 1' className='card-img-top' />
        </div>
        <div className='card-body text-dark'>
          <h3>Call US</h3>
          <p className='card-content text-secondary'>
            Google Maps here
          </p>
        </div>
        </div>
        </Col>

        <Col xs={6} md={4} sm={3}>
    <div className='card text-center shadow'>
        <div className='overflow'>
          <img src={img1} className='card-img-top' />
        </div>
        <div className='card-body text-dark'>
          <h4 className='card-title'>Visit US</h4>
          <p className='card-content text-secondary'>
            Maps + Address coming soon
          </p>
        </div>
        </div>
        </Col>
        </Row>
      </div>
    );
  };
   
  export default Contact;
