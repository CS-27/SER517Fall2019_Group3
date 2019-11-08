import {Component} from "react";
import React from "react";

export default class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state =
            {id:this.props.value.id, name: this.props.value.name, costo: this.props.value.costo, serviceCheck: this.props.value.checked}
    }

    render(){
        return(
            <tr>
                <td className="checkTd"><input type="checkbox" name="serviceCheck" checked={this.state.serviceCheck} onChange={this.handleChange}/></td>
                <td>{this.state.name}</td>
                <td><input type="text" name="costo" value={this.state.costo} onChange={this.handleChange} placeholder="Quantity"/></td>
            </tr>
        )
    }

    handleChange = event=> {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        }, this.updatepropss);
    }


    updatepropss() {
        console.log(this.state)
        this.props.updatelist(this.props.value.id, this.state)
    }

}
