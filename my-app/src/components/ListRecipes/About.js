import React, { Component } from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import RecipeList from './showRecipeAmerican';
import Button from '@material-ui/core/Button';
import ModalForm from './Modals/modalFormAM';
import ModalFormWD from './Modals/modalFormWD'


import CardDeck from 'react-bootstrap/CardDeck';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render(){
  return (

    <div>

      <div className="about-us">
        Recipe
      </div>
     <Container>
     <Card  className="cardMainOne">
  <Card.Body className ="card-body-one">
    <Card.Title className="card-title">Brew More! Worry Less!</Card.Title>
    <Card.Text >
       <h3>Select the recipe you want view</h3>
    </Card.Text>
  </Card.Body>
</Card>
     </Container>

<Container>
  <Row>
  <Col xs={6} md={4}>
    <Card className='card-image'>
      <Card.Body>
        <Image src="/images/americanPaleAle.jpg" thumbnail/>
        <Card.Title>American Pale Ale</Card.Title>
        <ModalForm buttonLabel="view" />
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6} md={4}>
    <Card >
      <Card.Body>
        <Image class ="thumbnail" src="/images/smashPaleAle.png" thumbnail/>
        <Card.Title>Winter Warmer</Card.Title>
        <ModalFormWD buttonLabel="view" />
      </Card.Body>
    </Card>
  </Col>

  
  
  </Row>
</Container>
    </div>
    
  );
  }
}

