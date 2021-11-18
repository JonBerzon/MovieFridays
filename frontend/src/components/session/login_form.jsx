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

    loginDemoUser(){
      const user = {
          username: 'Demo',
          password: 'password',
      }

      this.props.login(user);
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
              <div className='signup-intro-text'>
                <p>Welcome to Movie Fridays! </p>
                <p> 
                With Movie Fridays you can create groups for your friends and family 
                to view and rate movies.
                </p>
                <p>
                Get movie recommendations 
                based on currently popular movies.
                </p>
                <p>
                View IMDb, Metacritic, and your groups rating as well as
                your own rating of a movie. 
                </p>
                <p>
                Easily find what groups suit your tastes through groups "top picks". 
                </p>
                <p>
                Movie Fridays was planned, designed and built by<br/> <span>Albert Kim</span>, 
                 <span> Jonathan Berzon</span>, <span>Maisie Bruno-Tyne</span>, and <span>Yehuda Goldschein</span>.
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
                            <input className="login-demo" onClick={() => this.loginDemoUser()} type="button" value="Demo" />
                            <input className="login-submit" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);