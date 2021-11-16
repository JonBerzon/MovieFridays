import React from 'react';
import { withRouter } from 'react-router-dom';

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
                    <p>Intro intro intro</p>
                    <p>Intro intro intro intro</p>
                    <p>Intro intro intro intro intro</p>
                </div>

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <p className="border-bottom-light">LOGIN</p>
                    <p>SIGNUP</p>
                    <div className="login-input">

                        {this.renderErrors()}

                        <label>USERNAME
                        <input className="login-username" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            // placeholder="Username"
                        />
                        </label>

                        <br />

                        <label>PASSWORD
                        <input className="login-password" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            // placeholder="Password"
                        />
                        </label>
                        
                        <br />
                        
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