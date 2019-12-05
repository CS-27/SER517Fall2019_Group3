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
