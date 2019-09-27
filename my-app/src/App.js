import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Backdrop from './components/Backdrop';
import Toolbar from './components/Toolbar';

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

//export default () => <Backdrop />;


//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         Welcome to Brew Day!
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }
//
// export default App;
