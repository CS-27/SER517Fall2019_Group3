import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
class ListRecipeDatatable extends Component {

    viewItem = (item) => {
    }

    shareItem = (item) => {
    }


  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item.name}</td>
          <td>
          <Button id ="btn1-color" onClick={() => this.viewItem(item)}>View</Button>
              <Button id ="btn1-color" onClick={() => this.shareItem(item)}>Share</Button>
          </td>
        
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default ListRecipeDatatable
