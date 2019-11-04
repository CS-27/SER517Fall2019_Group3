
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody,Table } from 'reactstrap'

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
          <ModalBody>
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
  </tbody>
</Table>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormRecipe