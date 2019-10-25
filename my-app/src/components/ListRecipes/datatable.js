import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalFormWW from './Modals/modalFormWW'
class DataTable extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
     this.props.deleteIngredient(item);
    }

  }
  render() {

    const items = this.props.items.map(item => {
      return (
        
        <tr >
          
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          </tr>
       
        
      
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Ingredient & Method Name</th>
            <th>Quantity & Process</th>
            
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
