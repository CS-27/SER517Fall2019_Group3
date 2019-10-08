import React, { Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backdrop from './components/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import Contact from './components/Contact';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Brew Day!
      </header>
      
    </div>
    </Router>
  );
}
}

export default () => <Toolbar />;

