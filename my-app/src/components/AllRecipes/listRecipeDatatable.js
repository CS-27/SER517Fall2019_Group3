import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
import ModalForm from './modalFormAM'
import UserListModalForm from '../ListUser/Modal/UserListModalForm'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
// import UserListModalForm from './userListModalForm'
// import UserListModalForm from '../ListUser/Modal/modalFormAM'

import RecipeList from './showRecipeAll'

class ListRecipeDatatable extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
     this.props.deleteRecipe(item);
     console.log("in delItem");
     console.log(item.toString())
    }

  }

    shareItem = (item) => {

    }



  render() { 
    const names = this.props.names.map(item =>
      {
        // console.log(item)
      return (
        
        <tr  >
          <td>{item}</td>

            <td>

        <ModalForm name={item} buttonLabel="view" />
          {/* getRecipe={this.getRecipe(item)} */}
        </td>

          <td>
          <DeleteRoundedIcon onClick={() => this.deleteItem(item) }/>
          </td>
            {/*<td>*/}
                {/*<Button id ="btn2-color" onClick={() => this.shareItem(item) }>Shares </Button>*/}
            {/*</td>*/}

            <td>
                <UserListModalForm name={item} buttonLabel="share" />
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
