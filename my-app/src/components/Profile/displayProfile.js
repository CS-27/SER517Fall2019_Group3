import React, { Component } from 'react'
import { Table } from 'reactstrap';
class DisplayProfile extends Component {


  render() {
    const profile = this.props.profile;
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

export default DisplayProfile
