import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './userListDatatable.css'
import UserModalForm from './userModalForm'
class UserListDatatable extends Component {
    constructor(props) {
        super(props);}

    viewItem = (item) => {
    }

    handleSubmit = event => {
        this.props.history.push('/')
}

    redirectToTarget = () => {
        this.props.history.push('/signin')
    }

  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
    // for (items:this.pros.item){
      return (
        <tr  >
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            {/*<Button onClick = { this.props.history.push('/')}  id = "btn-color" type="submit" >View</Button>*/}
            {/*<button onClick={this.redirectToTarget}>Redirect</button>*/}
            <UserModalForm userID={item[3]} buttonLabel="view" />
            {/*<ModalForm name={item} buttonLabel="view" />*/}

            <td>
          </td>
          <td>
          {/*<Button id ="btn1-color" onClick={() => this.viewItem(item)}>View</Button>*/}
          </td>
        
        </tr>
        )
      })
      // console.log(items);

    return (
      <Table responsive hover>
        <thead>
          <tr>
            {/*<th>Username</th>*/}
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
