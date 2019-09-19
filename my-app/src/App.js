import React, { Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        Welcome to Brew Day!
                        <p>
                            <Link to={'/Signup'} className="nav-link">Signup</Link>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <Switch>
                            <Route path='/Signup' component={Signup} />
                        </Switch>
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
