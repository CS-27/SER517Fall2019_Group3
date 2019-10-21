import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import RecipeList from './showRecipe copy';
export default class Try2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this._onButtonClick} id="button">Button</Button>
        {this.state.showComponent && <RecipeList /> }
      </div>
    );
  }
}