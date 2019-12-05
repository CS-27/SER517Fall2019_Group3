import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import './userListDatatable.css'
import UserModalForm from './userModalForm'

class UserListShareDatatable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            Malt: "",
            Category: "",
            Directions: "",
            Hops1: "",
            schedule: "",
            grain: "",
            Hops: [],
            Grains: [],
            HopsSchedule: [],
            user:""

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextAPI = this.nextAPI.bind(this);
        console.log(this.props.beername);
    }
    viewItem = (item) => {
    }

    handleSubmit = (name) => (event) => {

        var apiUrl = 'http://127.0.0.1:5000/viewMyRecipe?userID='+sessionStorage.getItem("username")+'&&recipeName='+this.props.beername;
        var data;

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    data =result['Recipe Info'];
                    // this.state=data;
                    this.loading = false;
                    var recipe =[];
                    this.setState({name: data.name,
                        Directions: data.Directions,
                        Category:data.Category,
                        Malt: data.Malt,
                        Hops: data.Hops,
                        HopsSchedule: data.HopsSchedule},this.nextAPI(name));
                    },
                (error) => {
                    this.message = 'Error in viewing recipes';
                }
            )

    }

    nextAPI = (name) => {
        if (this.state.name != "") {
            fetch('http://127.0.0.1:5000/myRecipes', {
                method: 'POST',
                mode: 'cors',
                body:
                    JSON.stringify({
                            userID: name,
                            name: this.state.name,
                            Directions: this.state.Directions,
                            Category: this.state.Category,
                            Malt: this.state.Malt,
                            Hops: this.state.Hops,
                            // Grains: this.state.Grains,
                            HopsSchedule: this.state.HopsSchedule
                        }
                    ),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

                }
            }).then(res => {
                if (res.status === 200) {
                    this.message = 'Recipe added successfully'
                    alert("Recipe shared");
                }
                }).catch(err => console.log(err));
            // }
        }
    }
    redirectToTarget = () => {
        this.props.history.push('/signin')
    }


  render() {
    const userID = this.props.userID;

    const items = this.props.items.map(item => {
    // for (items:this.pros.item){
      return (
        <tr  >
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <Button onClick = { this.handleSubmit(item[3])}  id = "btn-color" type="submit" >Share</Button>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
              <th>Email</th>
        
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default UserListShareDatatable
