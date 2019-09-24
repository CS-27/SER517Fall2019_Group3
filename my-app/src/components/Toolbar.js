import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from './Backdrop';
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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BrewDay
          </Typography>

          <Button component = {Link} to = "/" color="inherit">BrewDay</Button>
          <Switch>
                  <Route exact path='/' component={Backdrop} />
              </Switch>


          <Button component = {Link} to = "/home" color="inherit">About</Button>
          <Switch>
                  <Route path='/home' component={Backdrop} />
              </Switch>

          <Button component = {Link} to = "/contact" color="inherit">Contact Us</Button>
          <Switch>
                <Route path='/contact' component={Backdrop} />
            </Switch>

          <Button component = {Link} to = "/profile" color="inherit">Profile</Button>
          <Switch>
                <Route path='/profile' component={Backdrop} />
            </Switch>
        </Toolbar>
      </AppBar>
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
