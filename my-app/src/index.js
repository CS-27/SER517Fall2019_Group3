import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './components/Contact';
import showMap from './components/showMap';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HopsList from './components/Recipes/HopsSchedule';
import IngredientPage from './components/IngredientPage/ingredientPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar/Toolbar";

import AddRecipe from "./components/UserRecipes/AddRecipe";
import ListRecipe from "./components/RecipeCategory/listRecipeCategory"


ReactDOM.render(<ListRecipe />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
