import React, { Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';

class App extends Component {
  render(){ 
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Brew Day!
        <p>
        <Link to={'/Contact'} className="nav-link">Contact</Link>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
              <Route path='/Contact' component={Contact} />
          </Switch>
      </header>
    </div>
    </Router>
  );
}
}

export default App;
