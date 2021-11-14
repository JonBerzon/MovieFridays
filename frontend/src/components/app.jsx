import React from 'react';
// eslint-disable-next-line 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// eslint-disable-next-line 
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

// import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <h1>We're in app</h1>
        {/* <Route exact path="/" component={<h1>We're in app</h1>} /> */}

        {/* <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch> */}
    </div>
);

export default App;