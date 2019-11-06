import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'
import ModalForm2 from './modalForm2'
import RecipeList from './showRecipeAll'

class ListRecipeDatatable2 extends Component {

  deleteItem2 = (item) => {
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
    const names2 = this.props.names2.map(item =>
      {
        // console.log(item)
      return (
        
        
        <tr  >
          <td>{item}</td>
        <td>

        <ModalForm2 name={item} buttonLabel="view" />
          {/* getRecipe={this.getRecipe(item)} */}
        </td>
          <td>
          <Button id ="btn1-color" onClick={() => this.deleteItem2(item) }>Delete </Button>
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
