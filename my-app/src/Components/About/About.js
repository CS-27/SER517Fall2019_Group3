import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>Brew More! Worry Less</Card.Title>
    <Card.Text>
       We help home brewers to store their recipes and maintain logs to their recipes and ingredients. 
       We also recommend you the beers you can brew with the ingredients you have.
    </Card.Text>
  </Card.Body>
</Card>
    
    </div>
    
  );
}

export default About;
