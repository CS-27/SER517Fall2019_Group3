import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalFormRecipe from './ModalFormRecipe';
class DataTableRecipe extends Component {

  
  render() {
    const userID = this.props.userID;
    console.log(this.props.items)
    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item.name}</td>
          <td>
          
              <ModalFormRecipe itemType={this.props.itemType} userID = {userID} buttonLabel="View" item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>

          
          </td>
        
        
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
        
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTableRecipe
