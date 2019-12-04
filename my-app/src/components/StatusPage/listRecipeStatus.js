
import React, { Component } from "react";

import './listRecipe.css';
import './beerStatus.css'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button,Form,
    FormGroup,
    FormControl,
    FormLabel, } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ListRecipeDatatableStatus from "./listRecipeDatatableStatus";
import ProgressBar from 'react-bootstrap/ProgressBar'
export default class ListRecipeStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            response: {},
            name:"",
            names:[],
            temp: ""
        }
        this.items = null;
        this.loading = true;
        this.names=null;
        this.name=null;
        this.temp=null;

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit=(event)=> {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://backendbeer.herokuapp.com/')

        event.preventDefault();
        
      }

    handleTemp=()=>{
    }

    status=(e)=>
    {
    }

    getItems=(event)=> {
            var apiUrl = 'https://backendbeer.herokuapp.com/recipeSearch?recipeName='+this.state.name;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    var data = result['Recipe List'];
                    var names=[];
                    this.loading = false;
                    this.items = [result['Recipe List']];
                    
            for(var i=0;i<this.items.length;i++)
            {
                                this.items[i].map((values)=>{
                                        names.push([
                                        values.name, values.Temp
                                            ]);
                                })
                                
            }
                    

                    this.setState({
                        items: this.items,
                        names: names
                    });

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
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > Type the recipe name to view status</Card.Title>
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="name"  >
                     <FormLabel>Recipe Name</FormLabel>
                     <FormControl
                         autoFocus
                         type="Text"
                         value={this.state.name}
                         onChange={this.handleChange}
                         placeholder="e.g WhiteDogIPA"
                     />
                 </FormGroup>
                 <Button onClick ={this.getItems} id = "btn-color" variant="primary"  >View Temperature</Button>
             </Form>
             {this.loading ?       <Loader
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={2000} //2 secs

             /> :
              <ListRecipeDatatableStatus temp={this.state.temp} names={this.state.names} status={this.status} deleteItem={this.deleteItem} deleteRecipe={this.deleteRecipe} ></ListRecipeDatatableStatus>}

         </Card.Body>
       </Card>



       
       <Card  className="mainCardOneMain">
         <Card.Body className = "card-body">
         <Card.Title className="titleCard" > Type the current temperature view status</Card.Title>
             <Form >
                 <FormGroup controlId="temp"  >
                     <FormLabel>Current temperature</FormLabel>
                     <FormControl
                         autoFocus
                         type="Text"
                         value={this.state.temp}
                         onChange={this.handleChange}
                         
                     />
                 </FormGroup>
                 <Button onClick={this.handleTemp} id = "btn-color" variant="primary"  >Submit</Button>
             </Form>
             </Card.Body>
           </Card>

  
                <div className="status">

            </div>
            
            <Card  className="mainCardOne">
            <Card.Body className ="bodyCardOne">

            <Card.Text className = "titleCardOne">
            Brewing Status
            </Card.Text>
            {/* <ProgressBar animated now={65} label={`65%`}/> */}
            <br/>
            <ProgressBar>
            <ProgressBar variant="success"   now={25} key={1} />
            <ProgressBar variant="success" now={25} key={2} />
            <ProgressBar variant="warning" animated striped  now={25} key={3} />
            <ProgressBar  now={0} key={3} />
            </ProgressBar>
            <br/>
            <p>Cool Wort and add hops</p>
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
