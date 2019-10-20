import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalForm from './modalForm'
class DataTable extends Component {


  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          <td>
          
              <ModalForm userID = {userID} buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              
          
          </td>
          <td>
          <Button id ="btn1-color" >Del</Button>
          </td>
        
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Ingredient Name</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
        
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable
