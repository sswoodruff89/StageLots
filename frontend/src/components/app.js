import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Switch} from 'react-router-dom';
import Modal from './modal/modal';
import NavBar from "./nav/nav";
import HomePage from './home/home';

const App = () => {
    
    return (
        <>
        <Modal />
        <NavBar />
        <Switch>
            <AuthRoute exact path="/" component={HomePage} />
        </Switch>
        </>
    );
}

export default App;