import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';

import Homepage from './containers/Homepage/homepage';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Layout>
        <Homepage> </Homepage>
      </Layout>
    </div>
  );
}
}

//old
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         Welcome to BrewDay 2!
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
