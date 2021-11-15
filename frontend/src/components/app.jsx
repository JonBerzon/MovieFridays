import React from 'react';
// eslint-disable-next-line 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// eslint-disable-next-line 
import { Switch } from 'react-router-dom';
// eslint-disable-next-line 
import { Route } from 'react-router';
import GroupsIndex from './groups/groups_index';

// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { logout } from '../actions/session_actions';
import LogoutContainer from './groups/logout_container';

const App = () => (
    <div>
        {/* <LogoutContainer /> */}
        <Switch>
            <ProtectedRoute exact path="/groups" component={GroupsIndex} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;