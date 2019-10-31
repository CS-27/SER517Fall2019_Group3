import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './addEdit.css'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

class AddEditForm extends React.Component {
  state = {
    name:'',
    quantity:'',
    userID:''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }



  submitFormEdit = e => {
    var itemType = this.props.itemType;
    var url = "";
    if(itemType === "ingredient"){
      url = 'http://127.0.0.1:5000/updateIngredient';
    }

    if(itemType === "equipment"){
      url = 'http://127.0.0.1:5000/updateEquipment';
    }

    if(itemType === "shoppinglist"){
      
      url = 'http://127.0.0.1:5000/updateShoppingList';
    }
    console.log(url)
    
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
        this.props.updateState([this.state.name,this.state.quantity ]);
      })
      
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      console.log(this.props.item)
      const name = this.props.item[0];
      const quantity = this.props.item[1];
      this.setState({ name, quantity})
    }
  }

  render() {
 
    return (
      <Container>
      <Card  className="mainCardIn">
   <Card.Body className = "card-body">
      <Form onSubmit={this.submitFormEdit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" disabled = "disabled" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Quantity</Label>
          <Input type="text" name="quantity" id="quantity" onChange={this.onChange} value={this.state.quantity === null ? '' : this.state.quantity}  />
        </FormGroup>
        <Button id ="btn-color">Edit</Button>
      </Form>
      </Card.Body>
       </Card>
            </Container>
    );
  }
}

export default AddEditForm
