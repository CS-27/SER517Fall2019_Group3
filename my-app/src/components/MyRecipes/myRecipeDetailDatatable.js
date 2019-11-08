import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './myRecipeDetailDatatable.css'
////import ModalFormWW from './Modals/modalFormWW'
//import showRecipe from './showRecipeWinterWarmer'
class DataTable2 extends Component {

  // deleteItem = (item) => {
  //   let confirmDelete = window.confirm('Delete item forever?')
  //   if(confirmDelete){
  //    this.props.deleteIngredient(item);
  //   }

  // }


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
      console.log(this.props.items);
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
