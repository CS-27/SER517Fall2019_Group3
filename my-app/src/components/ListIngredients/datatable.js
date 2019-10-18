import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalForm from './modalForm'
class DataTable extends Component {


  render() {

    const items = this.props.items.map(item => {
      return (
        <tr >
          
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          <td>
            <div >
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
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
            <th>Edit/ Delete</th>
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
