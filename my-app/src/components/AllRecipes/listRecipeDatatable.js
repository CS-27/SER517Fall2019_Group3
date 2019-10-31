import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
import ModalForm from './modalFormAM'
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

  // getRecipe=(item)=>
  // {
  //   const names = this.props.names.map(item =>
  //     {
  //       return(

  //       )
  //     })
  //   // this.props.getRecipe(item);
  //   // console.log("in rec");
  //   // console.log(item.toString())
  // }



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
          <Button id ="btn1-color" onClick={() => this.deleteItem(item) }>Delete </Button>
          </td>
        </tr>
        )
      })
      

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
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
