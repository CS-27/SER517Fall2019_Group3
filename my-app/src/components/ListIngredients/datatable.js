import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalForm from './modalForm'
class DataTable extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
     this.props.deleteIngredient(item);
    }

  }
  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          <td>
          
              <ModalForm userID = {userID} buttonLabel="Edit" item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>
              
          
          </td>
          <td>
          <Button id ="btn1-color" onClick={() => this.deleteItem(item)}>Del</Button>
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
