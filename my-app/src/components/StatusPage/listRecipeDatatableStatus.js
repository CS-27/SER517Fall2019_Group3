import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './listRecipeDatatable.css'


class ListRecipeDatatableStatus extends Component {

  deleteItem = (item) => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
     this.props.deleteRecipe(item);
     console.log("in delItem");
     console.log(item.toString())
    }

  }

// compare=(e)=>
// {
//   this.props.status(item)
// }

  

  render() { 
    const names = this.props.names.map(item =>
      {
        //const compare={this.compare(item[1])}
        // console.log(item)
      return (
        
        <tr  >
          
          <td>{item[0]}</td>
            <td>{item[1]}</td>
          

        </tr>
        )
      })
      

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th> Temperature </th>
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

export default ListRecipeDatatableStatus
