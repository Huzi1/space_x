import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Dashboard/Home";
// import FBLogin from "../login/FBLogin";
import Locations from '../Dashboard/Locations';
import Travel from '../Dashboard/Travel';
import LoginByGoogle from "../login/LoginByGoogle"
import ProtectedRoute from "./ProtectedRoutes";

const Routes = () => {


    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route path={"/"} component={LoginByGoogle} exact />

                    <ProtectedRoute path={"/location"} component={Locations} exact />
                    <ProtectedRoute path={"/Travel"} component={Travel} exact />

                    <ProtectedRoute exact path='/home' component={Home} />


                </Switch>
            </BrowserRouter>
        </>
    );
};
export default Routes;