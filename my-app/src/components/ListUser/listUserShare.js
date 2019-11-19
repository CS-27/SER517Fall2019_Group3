
import React, { Component } from "react";

import './listUser.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import UserListShareDatatable from './userListShareDatatable'
export default class ListUserShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {},
            name:"",
            names:[]
        }
        this.items = null;
        this.loading = true;
        this.names=null;
        this.name=null;

        console.log(this.props.beername);



    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        // console.log(this.state);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://127.0.0.1:5000/')

        event.preventDefault();
      }

    getItems=(event)=> {
        var apiUrl = 'http://127.0.0.1:5000/userSearch?user='

        fetch(apiUrl+this.state.name)
        //     // {
        //     // method: 'POST',
        //     //     mode: 'cors',
        //     //     body: JSON.stringify({
        //     //     userID: this.state.name,
        //     // }),
        //     //     headers: {
        //     //     'Content-Type': 'application/json',
        //     //         'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
        //     //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        //     //
        //     // }
        // // }
        // )
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             var data = result['User Details'];
        //             // console.log(data);
        //
        //             this.loading = false;
        //             this.items = [result['User Details']];
        //             var names=[];
        //             var users = [];
        //
        //             console.log(this.items);
        //             console.log(data.length);
        //
        //             // Object.keys(data).forEach(function (key) {
        //             //     users.push()
        //             // });
        //
        //
        //             for(var i=0;i<this.items.length;i++)
        //             {
        //
        //                 this.items[i].map((values)=>{
        //
        //                     names.push([
        //                         values.firstName
        //                     ]);
        //
        //
        //                 })
        //
        //             }
        //
        //
        //             this.setState({
        //                 items: this.items,
        //                 names: names
        //             });
        //
        //             // this.setState({
        //             //     items: this.items
        //             // });
        //
        //
        //
        //             },
        //         (error) => {
        //             this.setState({error});
        //         }
        //     )
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['User Details'];
                    var names=[];

                    this.loading = false;
                    this.items = [result['User Details']];

                    console.log(this.items);
                    console.log(data.length);


                    for(var i=0;i<this.items.length;i++)
                    {

                        this.items[i].map((values)=>{

                            names.push([
                                values.firstName, values.lastName, values.email, values.userID
                            ]);


                        })

                    }


                    this.setState({
                        items: this.items,
                        names: names
                    });

                    //console.log(names);


                },
                (error) => {
                    this.setState({error});
                }
            )


    }


    renderList() {
        return (

            <Container>
                <span class="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
            <Card  className="mainCardOneMain">
         <Card.Body >
         <Card.Title className="titleCard" >User List </Card.Title>
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="name"  >
                     <FormLabel>Name</FormLabel>
                     <FormControl
                         autoFocus
                         type="Text"
                         value={this.state.name}
                         onChange={this.handleChange}
                     />
                 </FormGroup>
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary" type="submit" >Search</Button>
             </Form>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs

             />: <UserListShareDatatable items={this.state.names} beername={this.props.beername}></UserListShareDatatable>}



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
