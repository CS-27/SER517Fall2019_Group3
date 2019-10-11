import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
class DataTable extends Component {


  render() {

    const items = this.props.items.map(item => {
      return (
        <tr >
          
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          <td>
            <div style={{width:"110px"}}>
            <Button id = "btn-color" >Edit</Button>
            
              <Button id = "btn1-color" >Del</Button>
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
