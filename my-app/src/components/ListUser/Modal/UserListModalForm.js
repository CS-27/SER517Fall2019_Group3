// import AddEditForm from './addEditForm'

import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, Table} from 'reactstrap'
import UserList from "../listUser";

class UserListModalForm extends Component {
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

        if(label === 'share'){
            button = <Button
                onClick={this.toggle}
            >{label}
            </Button>
            title = 'Brewer List'
        }

        return (
            <div>
                {button}

                <Modal  isOpen={this.state.modal} toggle={this.toggle} className='custom' size='lg' >
                    <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
                    <ModalBody>
                        <UserList userID={this.props.userID}
                                    toggle={this.toggle}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    }

export default UserListModalForm
