import AddMoreForm from './addMoreForm'

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './datatable.css'
class ModalFormAddMore extends Component {
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

      if(label === 'Add More'){
        button = <AddCircleOutlineIcon
                  onClick={this.toggle}
                  >{label}
                </AddCircleOutlineIcon>
        title = 'Add More'
      } 


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddMoreForm
            itemType = {this.props.itemType}
              userID = {this.props.userID}
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormAddMore
