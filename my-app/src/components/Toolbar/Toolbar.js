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

export default function ButtonAppBar()  {
  
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handle_Menu = event => {
    setAnchorE2(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handle_Close = () => {
    setAnchorE2(null);
  };
    
  return (

   

    <div className = "root" >
     <Router>

      <AppBar position="static" className = "bgColor" >
        <Toolbar>
        <div> 
        <IconButton edge="start" className = "menuButton" color="inherit" aria-haspopup="true"  onClick={handle_Menu} aria-controls="menu-bar" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Menu
                id="menu-bar"
                anchorE2={anchorE2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open2={open2}
                onClose={handle_Close}
              >
                <MenuItem component = {Link} to = "/signup" color="inherit" onClick={handle_Close} >Add Ingredient</MenuItem>
                <MenuItem component = {Link} to = "/signup" color="inherit" onClick={handle_Close} >Add Equipment</MenuItem>
              </Menu>
           </div>
          
          <Button component = {Link} to = "/" color="inherit" className = "title">BrewDay</Button>
          <Button component = {Link} to = "/about" color="inherit">About</Button>
          <Button component = {Link} to = "/contact" color="inherit">Contact Us</Button>
          <Button component = {Link} to = "/equipment" color="inherit">Equipment</Button>
        <div>
        
        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem component = {Link} to = "/signin" color="inherit" onClick={handleClose} >Login</MenuItem>
                <MenuItem component = {Link} to = "/signup" color="inherit" onClick={handleClose} >Sign Up</MenuItem>
              </Menu>
              </div>
         
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

