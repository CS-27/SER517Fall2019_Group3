/*Author:  Rishab Mantri
  Initial Creation:  September 21, 2019
  Last Modified:  Rishab Mantri
  Modified date:  October 10,2019
  About:  This routes the link to following required pages
*/
import React from "react";
import { Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Contact from "./components/Contact";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";
import AppliedRoute from "./components/AppliedRoute";
import Equipment from './components/EquipmentPage/Equipment';
import equipmentList from './components/EquipmentPage/equipmentList';
import IngredientPage from './components/IngredientPage/ingredientPage';
import ListIngredient from './components/ListIngredients/listingredient';
import AddRecipe from './components/Recipes/AddRecipe';
import ShoppingPage from './components/ShoppingPage/shoppingPage';
import ListShopping from './components/ListShopping/listShopping';
import ListUser from './components/ListUser/listUser';
import listRecipe from './components/ListRecipes/searchRecipe/listRecipe'
import Profile from './components/Profile/profile'
import RecipeHome from './components/ListRecipes/RecipeHome';
import WhatCanIBrew from './components/WhatICanBrewToday/whatIcanBrew';
import BeerStatus from "./components/StatusPage/beerStatus";

import ListRecipe from "./components/AllRecipes/listRecipeAll"
import AddRecipeUser from "./components/UserRecipes/AddRecipe"
import MyRecipeList from "./components/MyRecipes/viewMyRecipes";



export default({ childProps }) =>
    <Switch>
            <AppliedRoute path="/login" exact component={Signin} props={childProps} />
            <AppliedRoute path="/contact" exact component={Contact} props={childProps} />
            <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
            <AppliedRoute path="/signin" exact component={Signin} props={childProps} />
            <AppliedRoute path="/about" exact component={About} props={childProps} />
            <AppliedRoute path="/" exact component={Backdrop} props={childProps} />
            <AppliedRoute path="/equipmentList" exact component={equipmentList} props={childProps} />
            <AppliedRoute path="/equipment" exact component={Equipment} props={childProps} />
            <AppliedRoute path="/equipmentList" exact component={equipmentList} props={childProps} />
            <AppliedRoute path="/addingredient" exact component={IngredientPage} props={childProps} />
            <AppliedRoute path="/ingredientList" exact component={ListIngredient} props={childProps} />
            <AppliedRoute path="/addShoppingItem" exact component={ShoppingPage} props={childProps} />
            <AppliedRoute path="/shoppinglist" exact component={ListShopping} props={childProps} />
            <AppliedRoute path="/addRecipe" exact component={AddRecipe} props={childProps} />
            <AppliedRoute path="/profile" exact component={Profile} props={childProps} />

            <AppliedRoute path="/showRecipe" exact component={RecipeHome} props={childProps} />
 
            <AppliedRoute path="/userList" exact component={ListUser} props={childProps} />
        <AppliedRoute path="/recipeList" exact component={listRecipe} props={childProps} />

            <AppliedRoute path="/beerStatus" exact component={BeerStatus} props={childProps} />
            <AppliedRoute path="/whatcanIbrew" exact component={WhatCanIBrew} props={childProps} />
            <AppliedRoute path="/ListRecipe" exact component={ListRecipe} props={childProps} />
            <AppliedRoute path="/addRecipeUser" exact component={AddRecipeUser} props={childProps} />

            {/* My Recipes */}

            <AppliedRoute path="/addMyRecipe" exact component={BeerStatus} props={childProps} />
            <AppliedRoute path="/viewMyRecipes" exact component={MyRecipeList} props={childProps} />
            <AppliedRoute path="/beerStatus" exact component={BeerStatus} props={childProps} />

    </Switch>
