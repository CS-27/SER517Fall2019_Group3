import React, { Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Backdrop from './components/Backdrop';
import Toolbar from './components/Toolbar';
import Contact from './components/Contact';

class App extends Component {
  render(){
=======
import Contact from './components/Contact';

class App extends Component {
  render(){ 
>>>>>>> US:7 Task:68 Adding routing option to visit and test the landing page
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Brew Day!
<<<<<<< HEAD
=======
        <p>
        <Link to={'/contact'} className="nav-link">Contact</Link>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
              <Route path='/contact' component={Contact} />
          </Switch>
>>>>>>> US:7 Task:68 Adding routing option to visit and test the landing page
      </header>
      
    </div>
    </Router>
  );
}
}
<<<<<<< HEAD

export default () => <Toolbar />;
=======
>>>>>>> US:7 Task:68 Adding routing option to visit and test the landing page

