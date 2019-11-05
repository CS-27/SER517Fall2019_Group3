import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './myRecipeListDatatable.css'
import ModalForm from '../ListUser/userModalForm'


class myRecipeListDatatable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
   
    console.log(this.props.name)
  }


  render() { 
    console.log('hgjjgjh')
    console.log(this)
    const names = this.props.names.map(item =>
      {
        //console.log(props)
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

export default myRecipeListDatatable
