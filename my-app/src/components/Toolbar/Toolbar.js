/*Author:             Salini Chittineni
  Initial Creation:   September 5, 2019
  Modified by:        Salini Chittineni
  Modified date:      October 8,2019
  About:  This page is to redner toolbar for the application
  Updates to add functionality for MenuButton and other components
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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


export default class ButtonAppBar extends Component {

  handleLogout() {
  alert("Logged out");
  sessionStorage.setItem("username","NULL");
  }
  render() {
    return (
      <div>
        <Router>

          <AppBar position="static" className="bgColor" >
            <Toolbar>

              <div className="root" >
                <Button component={Link} to="/" color="inherit" className="title" className="text-capitalize">BrewDay</Button>
              </div>

              <Button component={Link} to="/equipment" color="inherit" className="text-capitalize">Recipe Kit</Button>
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

              <Button component={Link} to="/recipe" color="inherit" className="text-capitalize">Make a Recipe</Button>
              <Button component={Link} to="/about" color="inherit" className="text-capitalize">About</Button>
              <Button component={Link} to="/contact" color="inherit" className="text-capitalize">Contact Us</Button>
              <Button component={Link} to="/signin" color="inherit" className="text-capitalize">Login</Button>
              <Button onClick={this.handleLogout()} color="inherit" className="text-capitalize">Logout</Button>
            </Toolbar>
          </AppBar>
          <Switch>
            {/*<Route exact path='/' component={Backdrop} />*/}
            {/*<Route path='/contact' component={Contact} />*/}
            {/*<Route path='/signup' component={Signup} />*/}
            {/*<Route path='/signin' component={Signin} />*/}

            {/*<Route path='/about' component={About} />*/}
            {/*<Route path='/profile' component={Backdrop} />*/}
            {/*<Route path='/recipe' component={AddRecipe} />*/}
            {/*<Route path='/addingredient' component={IngredientPage} />*/}
            {/*<Route path='/ingredientList' component={ListIngredient} />*/}

            {/*<Route path='/equipmentList' component={equipmentList} />*/}
            {/*<Route path='/equipment' component={Equipment} />*/}
            {/*<Route path='/equipmentList' component={equipmentList} />*/}
            <Routes/>
          </Switch>
        </Router>

      </div>


    );
  }
}
