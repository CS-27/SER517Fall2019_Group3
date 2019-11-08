// import AddEditForm from './addEditForm'

import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, Table} from 'reactstrap'
// import RecipeList from "../AllRecipes/modalFormAM";
import UserListShare from "../listUserShare";
// import {Container} from "react-bootstrap";
// import DataTable from './userListDatatable';
// import Loader from 'react-loader-spinner';
// import UserList from "./showUser";

// import './datatable.css'
class UserShareListModalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        console.log(this.props.name[0]);
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
                        <UserListShare userID={this.props.userID} beername={this.props.name[0]}
                                    toggle={this.toggle}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    }

export default UserShareListModalForm
