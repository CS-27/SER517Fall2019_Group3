import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './myRecipeListDatatable.css';
import ModalForm1 from './userModalForm'
import UserShareListModalForm from '../ListUser/Modal/UserShareListModalForm'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


class ListRecipeDatatable extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
     this.props.deleteRecipe(item);
     console.log("in delItem");
     console.log(item.toString())
    }

  }



  render() { 
    const names = this.props.names.map(item =>
      {
        // console.log(item)
      return (
        
        <tr  >
          <td>{item}</td>
        <td>

        <ModalForm1 name={item} buttonLabel="view" />
          {/* getRecipe={this.getRecipe(item)} */}
        </td>
          <td>
          <DeleteRoundedIcon onClick={() => this.deleteItem(item) }/>
          </td>
            <td>
                <UserShareListModalForm name={item} buttonLabel="share" />
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
            <th>Delete</th>
            <th>Share</th>
          </tr>
        </thead>
        <tbody>
          {names}
        </tbody>
      </Table>
    )
  }
}

export default ListRecipeDatatable
