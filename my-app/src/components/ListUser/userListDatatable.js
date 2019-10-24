import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './userListDatatable.css'
import UserModalForm from './userModalForm'
class UserListDatatable extends Component {

    viewItem = (item) => {
    }


  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item[0]}</td>
          <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>{item[3]}</td>
          <td>
          
              <UserModalForm userID = {userID} buttonLabel="View" item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>
              
          
          </td>
          <td>
          <Button id ="btn1-color" onClick={() => this.viewItem(item)}>View</Button>
          </td>
        
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
              <th>Email</th>
        
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default UserListDatatable
