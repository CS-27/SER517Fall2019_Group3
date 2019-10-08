/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, {Component} from "react"
import RecipeDetails from "./RecipeDetails"
import { FormLabel, FormControl, FormGroup } from "react-bootstrap"
class Form extends Component {
    constructor(props) {
        super(props);
    this.state = {
    object1: [{name:""}],
    HOV: "",
    description: ""
  };
}
handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
      let object1 = [...this.state.object1]
      object1[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ object1 }, () => console.log(this.state.object1))
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }
  
handleSubmit = (e) => { e.preventDefault() }
addValues = (e) => {
    this.setState((prevState) => ({
      object1: [...prevState.object1, {name:""}],
    }));
  }

render() {
    let {HOV, description, object1} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <FormGroup bsSize="large">
                    <FormLabel color="white" htmlFor="name">HOV</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={HOV}
                        name="HOV" 
                        id="HOV"  
                    />
                </FormGroup>  
        <FormLabel htmlFor="description">Description</FormLabel>
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addValues}>Add more</button>
        <RecipeDetails object1={object1} />
        <input type="submit" value="Submit" /> 
      </form>
    )
  }
}
export default Form
