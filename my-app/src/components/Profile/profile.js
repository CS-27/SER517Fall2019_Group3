/*Author: Jahnavi Bantupalli
Date added: Oct 9, 2019
*/
import React, { Component } from "react";
import './profile.css';
import Card from 'react-bootstrap/Card';
import { Table, Button } from 'reactstrap';
import Loader from 'react-loader-spinner';


import { Container } from 'react-bootstrap';
export default class Profile extends Component {
   
    constructor(props) {
        super(props);
        this.loading = true;
        this.state = {
    
            userID: "",
            user : {}
 
          }
        this.state.userID =  sessionStorage.getItem("username")

        this.getProfile();
        
    }

 



      getProfile=()=>{
        var uname = sessionStorage.getItem("username");
        if (uname == null) {
            this.props.history.push('/signin')
        }
        else{
          var apiUrl = 'http://127.0.0.1:5000/userProfile'
          fetch(apiUrl, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                
                userID : this.state.userID
                
              })
            })
              .then(response => response.json())
              .then(res => {
                  this.loading = false;
                  var person =res['User Details'];
                  console.log(person.email)
                  this.setState({user:person})
                  console.log(this.state.user)
                  
              });




        }
    


        
      }

 
    renderList() {
        return (
            
            <Container>
                <span class="iconify"  data-inline="false"></span>
            <Card  className="mainCardOne">
         <Card.Body className = "card-body">
         
         <Card.Title className="card-title">Profile</Card.Title>
         {this.loading ? <Loader
                            type="Circles"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs

                        />:(
         <Table responsive hover>
        <thead>
          <tr>
            <td>First Name</td>
            <td>{this.state.user.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{this.state.user.lastName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{this.state.user.email}</td>
          </tr>
          <tr>
            <td>User id</td>
            <td>{this.state.user.userID}</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
                        )}
      
         </Card.Body>
       </Card>
            </Container>
            
            
          
        );
    }

    render() {
        return (
            <div>
                { this.renderList()}
            </div>
        );
    }
}
