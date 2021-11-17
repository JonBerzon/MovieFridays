import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import GroupsIndexContainer from './groups/groups_index_container';
import GroupShowContainer from './groups/group_show_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';
import MovieShowContainer from './movie_show/movie_show_container';


const App = () => (
    <div>
        <ProtectedRoute path='/' component={NavbarContainer} />
        {/* <ProtectedRoute path='/' component={SidebarContainer} /> */}
        <Switch>
            <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
            <ProtectedRoute exact path="/groups/:groupId" component={GroupShowContainer} />
            <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;