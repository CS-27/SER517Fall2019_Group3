import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './addEdit.css'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

class AddMoreForm extends React.Component {
  state = {
    name:'',
    quantity:'',
    userID:''
  }
  currItem = {
    name:'',
    quantity:'',
    userID:''
  }
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }



  submitForm = e => {
    var itemType = this.props.itemType;
    var url = "";
    if(itemType === "ingredient"){
      url = 'http://127.0.0.1:5000/addMoreIngredient';
    }

    if(itemType === "equipment"){
      url = 'http://127.0.0.1:5000/addMoreEquipment';
    }

    if(itemType === "shoppinglist"){
      
      url = 'http://127.0.0.1:5000/addMoreShoppingList';
    }
    e.preventDefault()
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        [this.state.name]: this.state.quantity,
        userID : this.props.userID
        
      })
    })
      .then(response => {
        this.props.toggle();
        var i1 = parseInt(this.state.quantity,10);
        var i2 = parseInt(this.props.item[1]);
        var c= i1+i2;
        this.props.updateState([this.state.name,c]);
      })
      
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const name = this.props.item[0];
      const quantity = this.props.item[1];
      const q ='';
      this.currItem = {[name]:quantity};
      this.setState({ name,q })
    }
  }

  render() {
    return (
      <Container>
      <Card  className="mainCardIn">
   <Card.Body className = "card-body">
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input disabled = "disabled" type="text" name="name" id="name" onChange={this.onChange} value={this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Quantity</Label>
          <Input type="text" name="quantity" id="quantity" onChange={this.onChange} value={this.state.quantity}  />
        </FormGroup>
        <Button id ="btn-color">Add More</Button>
      </Form>
      </Card.Body>
       </Card>
            </Container>
    );
  }
}

export default AddMoreForm
