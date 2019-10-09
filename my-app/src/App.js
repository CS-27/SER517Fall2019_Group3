import React, { Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backdrop from './components/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import Contact from './components/Contact';
import Routes from "./Routes";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";

// import IngredientPage from "./components/IngredientPage/ingredientPage";
// import ListIngredient from "./components/ListIngredients/listingredient";
import equipmentList from "./components/EquipmentPage/equipmentList";
import Equipment from "./components/EquipmentPage/Equipment";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import './components/Toolbar/Toolbar.css';
import IngredientPage from './components/IngredientPage/ingredientPage';
import ListIngredient from './components/./ListIngredients/listingredient'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  render(){
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
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

// class App extends Component {
//
//     render() {
//         return (
//             <div>
//                 <Router>
//
//                     <AppBar position="static" className="bgColor" >
//                         <Toolbar>
//
//                             <div className="root" >
//                                 <Button component={Link} to="/" color="inherit" className="title" className="text-capitalize">BrewDay</Button>
//                             </div>
//
//                             <Button component={Link} to="/equipment" color="inherit" className="text-capitalize">Recipe Kit</Button>
//                             <div className="dropdown">
//                                 <Button className="text-capitalize" color="inherit">Ingredients</Button>
//                                 <div className="dropdown-content">
//                                     <Button component={Link} to="/addingredient" color="inherit" className="text-capitalize" >Add Ingredient</Button>
//                                     <Button component={Link} to="/ingredientList" color="inherit" className="text-capitalize" >Ingredient List</Button>
//                                 </div>
//                             </div>
//                             <div className="dropdown">
//                                 <Button className="text-capitalize" color="inherit">Equipment</Button>
//                                 <div className="dropdown-content">
//                                     <Button component={Link} to="/equipment" color="inherit" className="text-capitalize" >Add Equipment</Button>
//                                     <Button component={Link} to="/equipmentList" color="inherit" className="text-capitalize" >Equipment List</Button>
//                                 </div>
//                             </div>
//
//                             <Button component={Link} to="/about" color="inherit" className="text-capitalize">About</Button>
//                             <Button component={Link} to="/contact" color="inherit" className="text-capitalize">Contact Us</Button>
//                             <Button component={Link} to="/signin" color="inherit" className="text-capitalize">Login</Button>
//
//                         </Toolbar>
//                     </AppBar>
//                     <Switch>
//                         <Route exact path='/' component={Backdrop} />
//                         <Route path='/contact' component={Contact} />
//                         {/*<Route path='/signup' component={Signup} />*/}
//                         <Route path='/signin' component={Signin} />
//
//                         <Route path='/about' component={About} />
//                         <Route path='/profile' component={Backdrop} />
//                         <Route path='/addingredient' component={IngredientPage} />
//                         <Route path='/ingredientList' component={ListIngredient} />
//
//                         <Route path='/equipmentList' component={equipmentList} />
//                         <Route path='/equipment' component={Equipment} />
//                         <Route path='/equipmentList' component={equipmentList} />
//                     </Switch>
//                 </Router>
//
//             </div>
//
//
//         );
//     }
// }

export default () => <Toolbar />;
{/*<Routes childProps={childProps} />*/}

