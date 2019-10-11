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

export default({ childProps }) =>
    <Switch>

        <AppliedRoute path="/login" exact component={Signin} props={childProps} />
            <AppliedRoute path="/contact" exact component={Contact} props={childProps} />
            <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
            <AppliedRoute path="/signin" exact component={Signin} props={childProps} />
            <AppliedRoute path="/about" exact component={About} props={childProps} />
            <AppliedRoute path="/profile" exact component={Backdrop} props={childProps} />
            <AppliedRoute path="/" exact component={Backdrop} props={childProps} />
            <AppliedRoute path="/equipmentList" exact component={equipmentList} props={childProps} />
            <AppliedRoute path="/equipment" exact component={Equipment} props={childProps} />
            <AppliedRoute path="/equipmentList" exact component={equipmentList} props={childProps} />
            <AppliedRoute path="/addingredient" exact component={IngredientPage} props={childProps} />
            <AppliedRoute path="/ingredientList" exact component={ListIngredient} props={childProps} />
            <AppliedRoute path="/addShoppingItem" exact component={ShoppingPage} props={childProps} />
            <AppliedRoute path="/shoppingList" exact component={ListShopping} props={childProps} />
            <AppliedRoute path="/addRecipe" exact component={AddRecipe} props={childProps} />

            {/*<AppliedRoute path="/" exact component={Backdrop} props={childProps} />*/}
            {/*<Route exact path='/' component={Backdrop} />*/}
            {/*<Route path='/contact' component={Contact} />*/}
            {/*<Route path='/signup' component={Signup} />*/}
            {/*<Route path='/signin' component={Signin} />*/}
            {/*<Route path='/about' component={About} />*/}
            {/*<Route path='/profile' component={Backdrop} />*/}
            {/*<Route path='/equipmentList' component={equipmentList} />*/}
            {/*<Route path='/equipment' component={Equipment} />*/}
            {/*<Route path='/equipmentList' component={equipmentList} />*/}
            {/*<Route path='/addingredient' component={IngredientPage} />*/}
            {/*<Route path='/ingredientList' component={ListIngredient} />*/}
            {/*<Route path='/addingredient' component={IngredientPage} />*/}
            {/*<Route path='/recipe' component={AddRecipe} />*/}

    </Switch>
