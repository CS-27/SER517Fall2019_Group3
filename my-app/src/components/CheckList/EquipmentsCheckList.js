import {Component} from "react";
import Card from 'react-bootstrap/Card';
import React from "react";
import {Button, Container} from "react-bootstrap";
import Table from "./Table"

var servizi = [{"id": "0", "name": " Can", "costo": "", "checked": false},
    {"id": "1", "name": "Glass ", "costo": "", "checked": false},
    {"id": "2", "name": "Bottles ", "costo": "", "checked": false},
    {"id": "3", "name": "Ice", "costo": "", "checked": false},
    {"id": "4", "name": "Drum", "costo": "", "checked": false}];


class EquipmentsCheckList extends Component{

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
                fetch('http://127.0.0.1:5000/addEquipment', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        userID: "user1",
                        [data[i].name] : data[i].costo
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.message = 'Equipment added successfully'
                        this.props.history.push('/equipmentList')
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
                        < Card.Title className = "titleCard" > List of Equipments </Card.Title>
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



export default EquipmentsCheckList
