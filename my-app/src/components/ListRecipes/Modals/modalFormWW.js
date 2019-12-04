import RecipeList from '../showRecipeWinterWarmer'

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import './modal.css'
class ModalFormWW extends Component {
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
      const label = this.props.buttonLabel

      let button = ''
      let title = ''

      if(label === 'view'){
        button = <Button
                  onClick={this.toggle}
                  >{label}
                </Button>
        title = 'Recipe View'
      } 


      return (
      <div>
        {button}
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='custom' size='lg' >
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <RecipeList
              toggle={this.toggle}
               />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormWW
