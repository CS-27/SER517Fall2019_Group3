import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './components/Contact';
import showMap from './components/showMap';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './components/About/About';
import IngredientPage from './components/IngredientPage/ingredientPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from './components/AddRecipe';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
