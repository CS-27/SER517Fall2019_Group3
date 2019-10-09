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
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './Toolbar.css';



export default class ButtonAppBar extends Component{
  
    render(){
  return (
    <div className = "root" >
     <Router>

      <AppBar position="static" className = "bgColor" >
        <Toolbar>

              
          <Button component = {Link} to = "/" color="inherit" className = "title">BrewDay</Button>
          <Button component = {Link} to = "/equipment" color="inherit">Recipe Kit</Button>
          <Button component = {Link} to = "/equipment" color="inherit">Ingredients</Button>

          <div class="dropdown">
              <Button class="dropbtn">Equipment 
              
                 <div class="dropdown-content">
                 <Button component = {Link} to = "/about" color="inherit">About</Button>
                 <Button component = {Link} to = "/about" color="inherit">About</Button>
                </div>
              </Button>
             
            
          </div>
          <Button component = {Link} to = "/about" color="inherit">About</Button>
          <Button component = {Link} to = "/contact" color="inherit">Contact Us</Button>
          <Button component = {Link} to = "/signin" color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/' component={Backdrop} />
              <Route path='/contact' component={Contact} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />

              <Route path='/about' component={About} />
                <Route path='/profile' component={Backdrop} />
                <Route path='/equipment' component={Equipment} />
            </Switch>
       </Router>
      
    </div>
  

  );
}
}