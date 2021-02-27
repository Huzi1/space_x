import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Comp, ...rest }) => {
    // localStorage.setItem('authToken', newAuthRes.id_token);

    return (
        <Route {...rest} render={
            props => {

                if (localStorage.getItem('user') != null) {
                    return <Comp {...rest} {...props} />
                } else {
                    return <Redirect to={
                        { pathname: "/" }}
                    />
                }

            }
        } />

    )
}

export default ProtectedRoute;