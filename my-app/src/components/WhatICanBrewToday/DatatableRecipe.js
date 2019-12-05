import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalFormRecipe from './ModalFormRecipe';
class DataTableRecipe extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = id => (event) => {
        var dt = new Date();
        fetch('http://127.0.0.1:5000/brewingBeer', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                userID: sessionStorage.getItem("username"),
                recipeName:id,
                beerStatus:"1",
                startTime:dt,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

            }
        }).then(res => {
            if (res.status === 200) {
                this.message = 'Brewing started successfully'
                this.props.history.push('/beerStatus')
            }
        }).catch(err => console.log(err));
    }
  
  render() {
    const userID = this.props.userID;
    const items = this.props.items.map(item => {
      return (
        <tr  >
          <td>{item.name}</td>
          <td>
              <ModalFormRecipe itemType={this.props.itemType} userID = {userID} buttonLabel="View" item={item} updateState={this.props.updateState} deleteItem ={this.props.deleteItem}/>
          </td>
        <td>
            <Button onClick = {this.handleSubmit(item.name)}  id = "btn-color">Start Brew</Button>
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
        
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTableRecipe
