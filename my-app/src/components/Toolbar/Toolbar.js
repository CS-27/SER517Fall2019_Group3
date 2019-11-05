/*Author:             Salini Chittineni
  Initial Creation:   September 5, 2019
  Modified by:        Harshita Kajal
  Modified date:      November 4,2019
  About:  This page is to redner toolbar for the application
  Updates to add functionality for MenuButton and other components
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from '../Backdrop';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Contact from '../Contact';
import About from '../About/About';
import Equipment from '../EquipmentPage/Equipment';
import equipmentList from '../EquipmentPage/equipmentList';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './Toolbar.css';
import IngredientPage from '../IngredientPage/ingredientPage';
import ListIngredient from '../ListIngredients/listingredient';
import Routes from "../../Routes"
import { useState } from "react";
import AddRecipe from '../Recipes/AddRecipe';
import RecipeHome from '../ListRecipes/RecipeHome';

class ButtonAppBar extends Component {

  constructor(props) {
    super(props);
  }
    
  handleLogout = async event  => {
      sessionStorage.removeItem("username");
      console.log(sessionStorage.getItem("username"));
    this.props.history.push('/signin')
      alert("Logged out");

    }

  render() {
    return (
      <div>
        <Router>

          <AppBar position="static" className="bgColor" >
            <Toolbar>

              <div className="root" >
                <Button component={Link} to="/" color="inherit" className="title" className="text-capitalize">BrewDay</Button>
                <div className="dropdown">
                  <Button className="text-capitalize" color="inherit">Users</Button>
                  <div className="dropdown-content">
                    <Button component={Link} to="/userList" color="inherit" className="text-capitalize" >Search</Button>
                  </div>
                </div>

            
              <div className="dropdown">
                <Button className="text-capitalize" color="inherit">Ingredients</Button>
                <div className="dropdown-content">
                  <Button component={Link} to="/addingredient" color="inherit" className="text-capitalize" >Add Ingredient</Button>
                  <Button component={Link} to="/ingredientList" color="inherit" className="text-capitalize" >Ingredient List</Button>
                </div>
              </div>
              <div className="dropdown">
                <Button className="text-capitalize" color="inherit">Equipment</Button>
                <div className="dropdown-content">
                  <Button component={Link} to="/equipment" color="inherit" className="text-capitalize" >Add Equipment</Button>
                  <Button component={Link} to="/equipmentList" color="inherit" className="text-capitalize" >Equipment List</Button>
                </div>
              </div>

              <div className="dropdown">
                <Button className="text-capitalize" color="inherit">Shopping</Button>
                <div className="dropdown-content">
                  <Button component={Link} to="/addShoppingItem" color="inherit" className="text-capitalize" >Add Item</Button>
                  <Button component={Link} to="/shoppinglist" color="inherit" className="text-capitalize" > Shopping List</Button>
                </div>
              </div>


              <div className="dropdown">
                <Button className="text-capitalize" color="inherit">All Recipes</Button>
                <div className="dropdown-content">
                <Button component={Link} to="/addRecipe" color="inherit" className="text-capitalize">Make a Recipe</Button>
                  <Button component={Link} to="/showRecipe" color="inherit" className="text-capitalize" >Default Recipes</Button>
                  <Button component={Link} to="/recipeList" color="inherit" className="text-capitalize" >Search Recipe</Button>
                  <Button component={Link} to="/ListRecipe" color="inherit" className="text-capitalize" >All Recipes</Button>
                </div>
              </div>

              <div className="dropdown">
                <Button className="text-capitalize" color="inherit">My Beers</Button>
                <div className="dropdown-content">
                <Button component={Link} to="/addRecipeUser" color="inherit" className="text-capitalize">Make a Beer</Button>
  
                </div>
              </div>

              

              
              <Button component={Link} to="/beerStatus" color="inherit" className="text-capitalize">Brewing Status</Button>
              </div>
              <Button component={Link} to="/about" color="inherit" className="text-capitalize">About</Button>
              <Button component={Link} to="/contact" color="inherit" className="text-capitalize">Contact Us</Button>
              <Button component={Link} to="/whatcanIbrew" color="inherit" className="text-capitalize">What Can I Brew Today</Button>
              <Button component={Link} to="/signin" color="inherit" className="text-capitalize">Login</Button>
              <Button onClick={this.handleLogout} color="inherit" className="text-capitalize">Logout</Button>
              <Button component={Link} to="/profile" color="inherit" className="text-capitalize">Profile</Button>

            </Toolbar>
          </AppBar>
          <Switch>
            <Routes />
          </Switch>
        </Router>

      </div>


    );
  }
}


export default withRouter(ButtonAppBar);
// export default withRouter(App);
