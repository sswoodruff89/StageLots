import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Switch, Route} from 'react-router-dom';
import Modal from './modal/modal';
import NavBar from "./nav/nav";
import HomePage from './home/home';
import ProfilePage from "./profile/profile";

const App = () => {
    
    return (
        <>
        <Modal />
        <NavBar />
        <Switch>
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <Route exact path="/" component={HomePage} />
            {/* <AuthRoute exact path="/" component={HomePage} /> */}
        </Switch>
        </>
    );
}

export default App;