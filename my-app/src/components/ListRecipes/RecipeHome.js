import React, { Component } from 'react';
import './RecipeHome.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import RecipeList from './showRecipeAmerican';
import Button from '@material-ui/core/Button';
import ModalForm from './Modals/modalFormAM';
import ModalFormWD from './Modals/modalFormWD';
import ModalFormWW from './Modals/modalFormWW';
import showRecipeWinterWarmer from './showRecipeWinterWarmer';


import CardDeck from 'react-bootstrap/CardDeck';
import ModalFormSP from './Modals/modalFormSP';

export default class RecipeHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  deleteItemAM = () => {
    let confirmDelete = window.confirm('Recipe will be deleted from the Database?')
    if(confirmDelete){
     this.deleteIngredientAM();
    }
  }

  deleteItemWW = () => {
    let confirmDelete = window.confirm('Recipe will be deleted from the Database?')
    if(confirmDelete){
     this.deleteIngredientWW();
    }
  }

  deleteItemWD = () => {
    let confirmDelete = window.confirm('Recipe will be deleted from the Database?')
    if(confirmDelete){
     this.deleteIngredientWD();
    }
  }

  deleteItemSP = () => {
    let confirmDelete = window.confirm('Recipe will be deleted from the Database?')
    if(confirmDelete){
     this.deleteIngredientSP();
    }
  }

  deleteIngredientWW =()=>{
    fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "WinterWarmer"
      })
    })
  }

  deleteIngredientAM =()=>{
    fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "AmericanPaleAle"
      })
    })
  }

  deleteIngredientSP =()=>{
    fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "SmashPaleAle"
      })
    })
  }


  deleteIngredientWD =()=>{
    fetch('http://127.0.0.1:5000/deleteRecipeAdmin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "WhiteDogIPA"
      })
    })
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
        <Image className='card-image2' src="/images/americanPaleAle.jpg" thumbnail/>
        <Card.Title>American Pale Ale</Card.Title>
        <ModalForm buttonLabel="view" />
        <Button id = "btn" type="submit" onClick={this.deleteItemAM}>Delete</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={6} md={4}>
    <Card className='card-image'>
      <Card.Body>
        <Image className='card-image2' src="/images/winterWarmer.jpeg" thumbnail/>
        <Card.Title>Winter Warmer</Card.Title>
        <ModalFormWW buttonLabel="view" />
        <Button id = "btn" type="submit" onClick={this.deleteItemWW} >Delete</Button>
      </Card.Body>
    </Card>
  </Col>

  </Row>
  <Row className='alignment'>
    <Col xs={6} md={4}>
    <Card className='card-image' >
      <Card.Body>
        <Image  className='card-image2' src="/images/whitedogIPA.jpg" thumbnail/>
        <Card.Title>White Dog IPA</Card.Title>
        <ModalFormWD buttonLabel="view" />
        <Button id = "btn" variant="primary" type="submit" onClick={this.deleteItemWD}>Delete</Button>
      </Card.Body>
    </Card>
  </Col>
  
  <Col xs={6} md={4}>
    <Card className='card-image' >
      <Card.Body>
        <Image  className='card-image2' src="/images/smashPaleAle.png" thumbnail/>
        <Card.Title>Smash Pale Ale</Card.Title>
        <ModalFormSP buttonLabel="view" />
        <Button id = "btn" variant="primary" type="submit" onClick={this.deleteItemSP}>Delete</Button>
      </Card.Body>
    </Card>
  </Col>
  
  </Row>
</Container>
    </div>
    
  );
  }
}

