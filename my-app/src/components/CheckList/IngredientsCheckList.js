import {Component} from "react";
import Card from 'react-bootstrap/Card';
import React from "react";
import {Button, Container} from "react-bootstrap";
import Table from "./Table"

var servizi = [{"id": "0", "name": " water", "costo": "", "checked": false},
    {"id": "1", "name": "oats ", "costo": "", "checked": false},
    {"id": "2", "name": "grains ", "costo": "", "checked": false},
    {"id": "3", "name": "sugar", "costo": "", "checked": false},
    {"id": "4", "name": "wheat", "costo": "", "checked": false}];


class IngredientsCheckList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            counter1: 5,
            lists: servizi
        }
        this.updatelist = this.updatelist.bind(this)
    }

    handleFormSubmit=(event)=> {
        var data = this.state.lists;
        for(let i=0;i<this.state.lists.length;i++) {
            if (data[i].checked == true) {
                fetch('https://backendbeer.herokuapp.com/addIngredient', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        userID: "user1",
                        [data[i].name] : data[i].costo
                        // [data.name] : data.quantity

                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'https://backendbeer.herokuapp.com',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.message = 'Ingredient added successfully'
                        this.props.history.push('/ingredientList');
                    }
                }).catch(err => console.log(err));
            }
        }
        event.preventDefault();
    }

    updatelist=(id,row)=>{
        for(let i=0;i<this.state.lists.length;i++){
            if(row.id == this.state.lists[i].id){
                this.state.lists[i].name = row.name;
                this.state.lists[i].costo = row.costo;
                this.state.lists[i].checked = row.serviceCheck;
            }
        }
    }


    render(){
        return (

            <Container>
                <span className="iconify" data-icon="mdi-bottle-wine" data-inline="false"></span>
                < Card className = "mainCardCheck" >
                    < Card.Body className = "card-body" >
                        < Card.Title className = "titleCard" > List of ingredients </Card.Title>
                        <form onSubmit={this.handleFormSubmit}>
                            <Table items={this.state.lists} updatelist1={this.updatelist}
                            />
                            <Button onClick = {this.handleFormSubmit}  id = "btn-color" type="submit" >Save</Button>
                        </form>

                    </Card.Body>
                </Card>
            </Container>
        )
    }


}



export default IngredientsCheckList
