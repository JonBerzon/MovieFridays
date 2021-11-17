import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        const renderErr = Object.keys(this.state.errors).includes("username") ? (
                <ul>
                    {Object.keys(this.state.errors).map((error, i) => (
                        <li className="login-errors" key={`error-${i}`}>
                            {this.state.errors[error]}
                        </li>
                    ))}
                </ul>
        ) : (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className="login-pwerror" key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )

        return renderErr;
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-intro">
                    <h1 className="border-bottom-heavy" >MOVIE FRIDAYS</h1>
                    <br/>
                    <div>
                      <p>Welcome to Movie Fridays! </p>
                      <p> 
                      With Movie Fridays you can create groups for your friends and family 
                      to view and rate movies, as well as get movie recommendations 
                      based on your ratings and currently popular movies. View ImBd and 
                      MetaCritic ratings as well as your personal rating and current group rating. 
                      Easily find what groups suit your tastes through groups "top picks". 

                      Movie Fridays is an application conceptualized, 
                      planned, designed and built by Albert Kim, Jonathan Berzon, 
                      Maisie Bruno-Tyne, and Yehuda Goldschein.
                      </p>
                    </div>
                </div>

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <p>LOGIN</p>
                    <Link className="login-signup" to="/signup">SIGNUP</Link>
                    <div className="login-input">

                        {this.renderErrors()}

                        <label>USERNAME
                        <input className="login-username" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        </label>

                        <label>PASSWORD
                        <input className="login-password" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        </label>
                        
                        <div className="login-buttons">
                            <input className="login-demo" type="submit" value="Demo" />
                            <input className="login-submit" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);