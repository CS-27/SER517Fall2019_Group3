import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
import ModalForm2 from './modalForm2'
import RecipeList from './showRecipeAll'

class ListRecipeDatatable2 extends Component {

  render() { 
    const names2 = this.props.names2.map(item =>
      {
        return (
        
        
        <tr  >
          <td>{item}</td>
        <td>

        <ModalForm2 name={item} buttonLabel="view" />
        </td>
        </tr>
        )
      })
      

 return (
   <Table responsive hover>
        

     <tbody>
       {names2}
     </tbody>
  </Table>
 )
  }
}

export default ListRecipeDatatable2
