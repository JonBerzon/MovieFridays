import React from 'react';
import bunny from '../../avatars/avatar-bunny.svg'
import cat from '../../avatars/avatar-cat.svg'
import dog from '../../avatars/avatar-dog.svg'
import dragon from '../../avatars/avatar-dragon.svg'
import lion from '../../avatars/avatar-lion.svg'
import monkey from '../../avatars/avatar-monkey.svg'
import panda from '../../avatars/avatar-panda.svg'
import unicorn from '../../avatars/avatar-unicorn.svg'
import { withRouter, Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            avatar: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false; 
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    toggleSelected(id){
      const selectedAvatar = document.getElementById(id);
      const avatars = document.getElementsByName('check'); 
      avatars.forEach((avatar) => {
        if(avatar.classList.contains('selected')){
          avatar.classList.remove('selected')
        } 
      }) 
      selectedAvatar.classList.add('selected');
    }

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

    handleSubmit(e) {
      e.preventDefault();
      let user = {
          username: this.state.username,
          password: this.state.password,
          avatar: this.state.avatar,
      };

      if (user.username.length < 4 || user.username.length > 20) {
        const errors = document.getElementById('avatarError')
        errors.classList.remove('display-avatarErrors')
        this.props.signup(user, this.props.history)
      } else if (user.password.length < 6) {
        const errors = document.getElementById('avatarError')
        errors.classList.remove('display-avatarErrors')
        this.props.signup(user, this.props.history)
      } else if (!user.avatar) {
        const errors = document.getElementById('avatarError')
        errors.classList.add('display-avatarErrors')
        this.setState(prevState => {
          let errors = Object.assign({}, prevState.errors);
          errors.username = "";
          errors.password = "";
          return { errors };
        })
      } else {
        this.props.signup(user, this.props.history).then(() => this.props.login(user))
      }
    }

    renderErrors() {
      const renderErr = Object.keys(this.state.errors).includes("username") ? (
          <ul>
              {Object.keys(this.state.errors).map((error, i) => (
                  <li className="signup-errors" key={`error-${i}`}>
                      {this.state.errors[error]}
                  </li>
              ))}
          </ul>
      ) : (
          <ul>
              {Object.keys(this.state.errors).map((error, i) => (
                  <li className="signup-pwerror" key={`error-${i}`}>
                      {this.state.errors[error]}
                  </li>
              ))}
          </ul>
      )

        return renderErr;
    }

    renderAvatars() {

      return(
        <div className="signup-avatar-container" >
          <h1>Select an Avatar</h1>

          <div>
            <input  onClick={this.update('avatar')} type="checkbox" id="avatar1" value={bunny}/>
            <label className="signup-avatar" htmlFor="avatar1" onClick={() => this.toggleSelected('cb1')}>
              <div name="check" className="checkbox-background" id="cb1">
                <img className='avatar-image'  src={bunny} alt="bunny" />
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar2" value={cat} />
            <label className="signup-avatar" htmlFor="avatar2" onClick={() => this.toggleSelected('cb2')}>
              <div name="check" className="checkbox-background" id="cb2">
                <img className='avatar-image' src={cat} alt="cat" />
              </div>
            </label>

            <input  className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar3" value={dog}/>
            <label className="signup-avatar" htmlFor="avatar3" onClick={() => this.toggleSelected('cb3')}>
              <div name="check" className="checkbox-background" id="cb3">
                <img className='avatar-image' src={dog} alt="dog" />
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar4" value={dragon}/>
            <label className="signup-avatar" htmlFor="avatar4" onClick={() => this.toggleSelected('cb4')}>
              <div name="check" className="checkbox-background" id="cb4">
                <img className='avatar-image' src={dragon} alt="dragon" />
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar5" value={lion}/>
            <label className="signup-avatar" htmlFor="avatar5" onClick={() => this.toggleSelected('cb5')}>
              <div name="check" className="checkbox-background" id="cb5">
                <img className='avatar-image' src={lion} alt="lion" />
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar6" value={monkey}/>
            <label className="signup-avatar" htmlFor="avatar6" onClick={() => this.toggleSelected('cb6')}>
              <div name="check" className="checkbox-background" id="cb6">
                <img className='avatar-image' src={monkey} alt="monkey" />
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar7" value={panda}/>
            <label className="signup-avatar" htmlFor="avatar7" onClick={() => this.toggleSelected('cb7')}>
              <div name="check" className="checkbox-background" id="cb7">
                <img className='avatar-image' src={panda} alt="panda"/>
              </div>
            </label>

            <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar8" value={unicorn}/>
            <label className="signup-avatar" htmlFor="avatar8" onClick={() => this.toggleSelected('cb8')}>
              <div name="check" className="checkbox-background" id="cb8">
                <img className='avatar-image' src={unicorn} alt="unicorn" />
              </div>
            </label>
          </div>
        </div>
      )
    }

    render() {
      return (
        <div className="signup-background">
          <div className="signup-intro">
              <h1 className="border-bottom-heavy" >MOVIE FRIDAYS</h1>
              <div className='signup-intro-text'>
              <p>Welcome to Movie Fridays! </p>
              <br />
              <p>
                With Movie Fridays you can create groups for your friends and family
                to view and rate movies.
              </p>
              <br />
              <p>
                Get movie recommendations
                based on currently popular movies.
              </p>
              <br />
              <p>
                View IMDb, Metacritic, and your groups rating as well as
                your own rating of a movie.
              </p>
              <br />
              <p>
                Easily find what groups suit your tastes through groups "top picks".
              </p>
              <br />
              <p>
                Movie Fridays was planned, designed and built by<br /> <span>Albert Kim</span>,
                <span> Jonathan Berzon</span>, <span>Maisie Bruno-Tyne</span>, and <span>Yehuda Goldschein</span>.
              </p>
              </div>
          </div>

          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-login">
                <h1>SignUp</h1>
                  <div></div>
                <Link id="loginButtonSignup" to="/login">Login</Link>
              </div>
              
              <div className="signup-input">
                  <div className="signup-username">
                    <label >Username
                      <input  
                          className="border-bottom-light"
                          type="text"
                          value={this.state.username}
                          onChange={this.update('username')}
                          placeholder="Username"
                      />
                    </label>
                  </div>

                  <div className="signup-password">
                    <label>Password
                      <input 
                          className="border-bottom-light"
                          type="password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          placeholder="Password"
                      />
                    </label>
                  </div>
                  
                  {this.renderErrors()}
                    <p id="avatarError" className="hide-avatarErrors">Avatar is required</p>
                  {this.renderAvatars()}
                  
                  <div className="signup-buttons">
                    <input className="login-demo" onClick={() => this.loginDemoUser()} type="button" value="Demo" />
                    <input type="submit" value="Submit" />
                  </div>
              </div>
            </form>  
          </div>
        </div>
      );
    }
}

export default withRouter(SignupForm);