/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React from "react"
import RecipeDetails from "./RecipeDetails"
import { FormLabel } from "react-bootstrap"
class Form extends React.Component {
  state = {
    object1: [{name:""}],
    HOV: "",
    description: ""
  }
handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
      let object1 = [...this.state.object1]
      object1[e.target.dataset.id][e.target.className] = e.target.value()
      this.setState({ object1 }, () => console.log(this.state.object1))
    } else {
      this.setState({ [e.target.name]: e.target.value() })
    }
  }
addValues = (e) => {
    this.setState((prevState) => ({
      object1: [...prevState.object1, {name:""}],
    }));
  }
handleSubmit = (e) => { e.preventDefault() }
render() {
    let {HOV, description, object1} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <FormLabel htmlFor="name">HOV</FormLabel>
        <input type="text" name="HOV" id="HOV" value={HOV} />
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
