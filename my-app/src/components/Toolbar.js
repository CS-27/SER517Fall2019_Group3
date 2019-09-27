import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from './Backdrop';
import Signup from './Signup';
import About from './About/About';


import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar()  {
  
  const classes = useStyles();
  // const classes = theme();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
  return (

   

    <div className={classes.root} bg-dark>
     <Router>

      <AppBar position="static" bg-dark >
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button component = {Link} to = "/" color="inherit" variant="h6" className={classes.title} >BrewDay</Button>
          <Button component = {Link} to = "/about" color="inherit">About</Button>
          <Button component = {Link} to = "/contact" color="inherit">Contact Us</Button>
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
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem component = {Link} to = "/signup" color="inherit" onClick={handleClose} >Sign Up</MenuItem>
              </Menu>
              </div>
         
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/' component={Backdrop} />

             
              <Route path='/contact' component={Backdrop} />
              <Route path='/signup' component={Signup} />
              <Route path='/about' component={About} />
                <Route path='/profile' component={Backdrop} />
            </Switch>
       </Router>
      
    </div>
  

  );
}


// const style = {
//   display: 'flex',
//   backgroundColor: '#d6e2ea',
//   padding: '6px 8px'
// };
//
// function Toolbar() {
//     return (
//       <div style={style}>
//         <button>MENU</button>
//         <div style={{flex: 1}}></div>
//         <a>About</a>
//         <a>Contact Us</a>
//         <a>Profile</a>
//       </div>
//     );
// }

//export default Toolbar;
