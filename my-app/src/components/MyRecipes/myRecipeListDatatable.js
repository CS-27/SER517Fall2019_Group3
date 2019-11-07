import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './myRecipeListDatatable.css';
import ModalForm1 from './userModalForm'


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

        <ModalForm1 name={item} buttonLabel="view" />
          {/* getRecipe={this.getRecipe(item)} */}
        </td>
          <td>
          <Button id ="btn1-color" onClick={() => this.deleteItem(item) }>Delete </Button>
          </td>
            <td>
                <Button id ="btn2-color" onClick={() => this.shareItem(item) }>Share </Button>
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
