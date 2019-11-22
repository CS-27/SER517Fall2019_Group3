import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './datatable.css'
import ModalFormAddMore from './modalFormAddMore'
import ModalForm from './modalForm'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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
          {/*<td>{item[0]}</td>*/}
          <td>
          
              <ModalForm itemType={this.props.itemType} userID = {userID} buttonLabel={item[0]} item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>

          
          </td>
            {/*<td>{item[1]}</td>*/}
            <td>

                <ModalForm itemType={this.props.itemType} userID = {userID} buttonLabel={item[1]} item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>


            </td>
            <td>
          <ModalFormAddMore itemType={this.props.itemType} userID = {userID} buttonLabel="Add More" item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>

          </td>
          <td>
          <DeleteRoundedIcon onClick={() => this.deleteItem(item)}>Del</DeleteRoundedIcon>
          </td>
        
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            {/*<th>Edit</th>*/}
            <th>Add More</th>
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
