import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './myRecipeDetailDatatable.css'
class DataTable2 extends Component {

  render() {

    const items2 = this.props.items.map(item => {
      return (

        <tr >
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          </tr>
        )
      })
      console.log('inside datatable');
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Ingredient & Method Name</th>
            <th>Quantity & Process</th>
          </tr>
        </thead>
        <tbody>
          {items2}
          
        </tbody>
      </Table>
    )
  }
}

export default DataTable2
