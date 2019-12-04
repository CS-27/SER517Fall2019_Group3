import {Component} from "react";
import React from "react";
import ListItem from "./ListItem"

export default class Table extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state =
            {totale: 0, checked: false
            }
        this.updatelist = this.updatelist.bind(this)
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th className="checkTh"></th>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                    </tr>

                    {this.props.items.map((prodotto) =>
                        <ListItem key={prodotto.id} value={prodotto} updatelist={this.updatelist}
                        />
                    )}

                </table>
            </div>
        )
    }


    updatelist(id,row){
        this.props.updatelist1(id,row)
    }

}
