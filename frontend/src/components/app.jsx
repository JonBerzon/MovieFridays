import React from 'react';
import { AuthRoute, BlockedRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import GroupsIndexContainer from './groups/groups_index_container';
import GroupShowContainer from './groups/group_show_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import ReviewForm from './reviews/review_form_container'
import Modal from './modal/modal'
import MovieShowContainer from './movie_show/movie_show_container';
import MovieDisplayContainer from './movies/movie_display_container';



const App = () => (
    <div>
      <Modal/>
      <BlockedRoute exact path='/' />
        <Route path="/movies/:movie_id/review" component={ReviewForm} /> 
        <Route path="/movie-display/:movieId" component={MovieDisplayContainer} />

        <Switch>
            <ProtectedRoute exact path="/groups/:groupId" component={GroupShowContainer} />
            <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
            <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

        </Switch>
    </div>
);

export default App;