import React, { Component } from 'react';
import {connect, useStore, useSelector} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';


// const loggedIn = useSelector(state => state.session.isAuthenticated);
// const Auth = ({component: Component, path, loggedIn, exact}) => {
const Auth = ({component: Component, path, exact}) => {
    const loggedIn = useSelector((state) => state.session.isAuthenticated);

    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/profile" />
            )
        )} />
    );
}

const Protected = ({component: Component, ...rest}) => {
    const loggedIn = useSelector((state) => state.session.isAuthenticated);
    
    return (
        <Route
            {...rest}
            render={props => 
                loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

}

export const AuthRoute = withRouter(Auth);
export const ProtectedRoute = withRouter(Protected);