import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
import ModalForm from './modalForm'
import RecipeList from './showRecipeAll'

class ListRecipeDatatable extends Component {


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

        </tr>
        )
      })
      

    return (
      <Table responsive hover>

        <tbody>
          {names}
        </tbody>
      </Table>
    )
  }
}

export default ListRecipeDatatable
