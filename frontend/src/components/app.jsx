import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import GroupsIndex from './groups/groups_index';


import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import MovieShow from './movie_show/movie_show';

const App = () => (
    <div>
        <ProtectedRoute path='/' component={NavbarContainer} />
        <Switch>
            <ProtectedRoute exact path="/movie" component={MovieShow} />
            <ProtectedRoute exact path="/groups" component={GroupsIndex} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;