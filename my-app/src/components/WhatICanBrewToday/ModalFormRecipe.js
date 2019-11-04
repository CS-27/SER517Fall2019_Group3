
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody,Table } from 'reactstrap'
import Card from 'react-bootstrap/Card';
import './ModalFormRecipe.css'
class ModalFormRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
      const userID = this.props.userID
      const label = this.props.buttonLabel

      let button = ''
      let title = ''
    console.log(this.props.item)
      if(label === 'View'){
        button = <Button
                  id ="btn-color"
                  onClick={this.toggle}
                  >{label}
                </Button>
        title = 'View'
      } 


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>            <Card  className="mainCardOneRecipe">
         <Card.Body className = "card-body-recipe">
         <Card.Title className="titleCard" >{this.props.item.name}</Card.Title>
         <Table responsive hover>
  
  <tbody>
    <tr>
        <td>Directions</td>
      <td>
       { this.props.item.Directions}
      </td>
    </tr>
    <tr>
        <td>Malt</td>
      <td>
       { this.props.item.Malt}
      </td>
    </tr>
    <tr>
        <td>Grains</td>
      <td>
       { this.props.item.Grains}
      </td>
    </tr>
    <tr>
        <td>Hops</td>
      <td>
       { this.props.item.Hops}
      </td>
    </tr>
    <tr>
        <td>HopsSchedule</td>
      <td>
       { this.props.item.HopsSchedule}
      </td>
    </tr>
  </tbody>
</Table>
      
         </Card.Body>
       </Card>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormRecipe