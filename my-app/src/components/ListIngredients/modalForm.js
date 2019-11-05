import AddEditForm from './addEditForm'

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import './datatable.css'
class ModalForm extends Component {
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

      if(label === 'Edit'){
        button = <Button
                  id ="btn-color"
                  onClick={this.toggle}
                  >{label}
                </Button>
        title = 'Edit'
      } 


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm