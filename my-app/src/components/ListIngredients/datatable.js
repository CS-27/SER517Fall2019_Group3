import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalForm from './modalForm'
class DataTable extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://127.0.0.1:5000/deleteIngredient', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: this.props.userID,
        [item[0]]:item[1]
      })
    })
      .then(() => {
        this.props.deleteItem([item[0],item[1]])
      })
      .catch(err => console.log(err))
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
