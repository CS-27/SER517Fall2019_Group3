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
            // userID: sessionStorage.getItem("username")

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextAPI = this.nextAPI.bind(this);
        console.log(this.props.beername);
    }
    viewItem = (item) => {
    }

    handleSubmit = (name) => (event) => {

        // var convention= this.props.items;
        // console.log(convention)
        console.log(name)
        //console.log(convention)
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
                        // Grains: data.Grains,
                        HopsSchedule: data.HopsSchedule},this.nextAPI(name));
                    // console.log(data)
                    // Object.keys(data).forEach(function(key) {
                    //     if(key!="_id" && key!="name" && key!="Category"){
                    //         recipe.push([
                    //             key,data[key]
                    //         ]);
                    //     }
                    // });
                    //
                    // this.setState({
                    //     recipe: recipe
                    // });
                    //
                    // const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
                    // this.recipe = dataArray;
                    console.log(this.state);
                },
                (error) => {
                    //this.setState({ error });
                    this.message = 'Error in viewing recipes';
                }
            )

        // this.state.name=data.name;
        // console.log(this.state.name);



        // const hopsArray = this.state.Hops1.split(',');
        // this.state.Hops=hopsArray
        //
        // const grainArray = this.state.grain.split(',');
        // this.state.Grains= grainArray
        //
        // const sArray = this.state.schedule.split(',');
        // this.state.HopsSchedule=sArray
        //
        // console.log(this.state);
        // var userID = this.props.userID;
        // console.log(userID);
        //
        //

        // console.log(data);

        //     .then(fetch('http://127.0.0.1:5000/myRecipes', {
        //     method: 'POST',
        //     mode: 'cors',
        //     body:
        //         JSON.stringify({
        //         userID: this.state.user,
        //         name: this.state.name,
        //         Directions: this.state.Directions,
        //         Malt: this.state.Malt,
        //         Temp: this.state.Temp,
        //         Hops: this.state.Hops,
        //         Grains: this.state.Grains,
        //         HopsSchedule: this.state.HopsSchedule
        //     }
        //     ),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
        //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        //
        //     }
        // }).then(res => {
        //     if(res.status===200)
        //         this.message = 'Recipe added successfully'
        //     console.log(res.status) ;
        // })).catch(err => console.log(err));

        event.preventDefault();
        // .then(this.nextAPI();)
    }

    nextAPI = (name) => {
        // console.log("add" + this.props.beername);
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
                console.log(res.status);
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
            {/*<button onClick={this.redirectToTarget}>Redirect</button>*/}
            {/*<UserModalForm userID={item[3]} buttonLabel="Share" />*/}
            {/*<ModalForm name={item} buttonLabel="view" />*/}

            <td>
          </td>
          <td>
          {/*<Button id ="btn1-color" onClick={() => this.viewItem(item)}>View</Button>*/}
          </td>
        
        </tr>
        )
      })
      // console.log(items);

    return (
      <Table responsive hover>
        <thead>
          <tr>
            {/*<th>Username</th>*/}
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
