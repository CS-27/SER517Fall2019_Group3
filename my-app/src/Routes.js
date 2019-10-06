import React from "react";
import { Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Contact from "./components/Contact";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import About from "./components/About/About";
import AppliedRoute from "./components/AppliedRoute";

// import Home from "./containers/Home";

export default({ childProps }) =>
    <Switch>
        {/*<AppliedRoute path="/login" exact component={Signin} props={childProps} />*/}
        <AppliedRoute path="/login" exact component={Signin} props={childProps} />
        <Route exact path='/' component={Backdrop} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />

        <Route path='/about' component={About} />
        <Route path='/profile' component={Backdrop} />
    </Switch>
