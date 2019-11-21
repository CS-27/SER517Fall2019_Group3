import ListRecipe from './viewEachRecipe'
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
//import Modal from 'react-bootstrap/Modal';
import './userModal.css'
class ModalForm2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    console.log("modal")
   
    console.log(this.props.name)
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

      // if(label === 'view'){
      //   button = <Button
      //             onClick={this.toggle}
      //             >{label}
      //           </Button>
      //   title = 'Recipe View'
      // } 

      if(label === 'view'){
        button=   <VisibilityIcon onClick={this.toggle}/>
   title = 'Recipe View' 
 } 


      return (
      <div>
        {button}
        
        <Modal  isOpen={this.state.modal} toggle={this.toggle} className='custom' size='lg' >
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <ListRecipe name={this.props.name}
              toggle={this.toggle}
               />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm2