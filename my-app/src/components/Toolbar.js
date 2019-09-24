import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from './Backdrop';
import About from './About/About';

import './About/About.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
     <Router>
      <AppBar position="static"  >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BrewDay
          </Typography>
          <Button component = {Link} to = "/" color="inherit">BrewDay</Button>

          <Button component={Link} to = "/about" color="inherit">About</Button>
         
          <Button component = {Link} to = "/contact" color="inherit">Contact Us</Button>

          <Button component = {Link} to = "/profile" color="inherit">Profile</Button>
          
        </Toolbar>
       
      </AppBar>
      <Switch>
        <Route exact path='/' component={Backdrop} />

              <Route path='/about' component={About} />
              <Route path='/contact' component={Backdrop} />
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
