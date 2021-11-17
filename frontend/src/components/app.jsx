import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import GroupsIndexContainer from './groups/groups_index_container';


import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = () => (
    <div>
        <ProtectedRoute path='/' component={NavbarContainer} />
        {/* <ProtectedRoute path='/' component={SidebarContainer} /> */}
        <Switch>
            <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;