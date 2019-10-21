import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
 

export default class SelectRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""
   // store: ""
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const store1=this.state.value
    // this.setState({
    //   store = store1
    // });
    console.log(store1)
    event.preventDefault();
    
    
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label >
         <h4> Select a beer to view the recipe:</h4> 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="customAle">customAle</option>
            <option value="IPA">IPA</option>
            <option value="somethingnew">Something New</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

