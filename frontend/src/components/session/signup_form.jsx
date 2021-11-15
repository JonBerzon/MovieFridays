import React from 'react';
import { withRouter } from 'react-router-dom';
const AVATAR_PREFIX = 'http://127.0.0.1:5500/'

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
        if (this.props.errors !== prevProps.errors){
            this.setState({ errors: this.props.errors })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            avatar: this.state.avatar,
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>

                    <div className="signup-avatar-container">
                      <input  onClick={this.update('avatar')} type="checkbox" id="avatar1" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-bunny.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar1" onClick={() => this.toggleSelected('cb1')}>
                        <div name="check" className="checkbox-background" id="cb1">
                          <img className='avatar-image'  src={AVATAR_PREFIX + `frontend/src/avatars/avatar-bunny.svg`} alt="bunny" />
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar2" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-cat.svg`} />
                      <label className="signup-avatar" htmlFor="avatar2" onClick={() => this.toggleSelected('cb2')}>
                        <div name="check" className="checkbox-background" id="cb2">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-cat.svg`} alt="cat" />
                        </div>
                      </label>

                      <input  className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar3" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-dog.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar3" onClick={() => this.toggleSelected('cb3')}>
                        <div name="check" className="checkbox-background" id="cb3">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-dog.svg`} alt="dog" />
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar4" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-dragon.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar4" onClick={() => this.toggleSelected('cb4')}>
                        <div name="check" className="checkbox-background" id="cb4">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-dragon.svg`} alt="dragon" />
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar5" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-lion.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar5" onClick={() => this.toggleSelected('cb5')}>
                        <div name="check" className="checkbox-background" id="cb5">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-lion.svg`} alt="lion" />
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar6" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-monkey.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar6" onClick={() => this.toggleSelected('cb6')}>
                        <div name="check" className="checkbox-background" id="cb6">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-monkey.svg`} alt="monkey" />
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar7" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-panda.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar7" onClick={() => this.toggleSelected('cb7')}>
                        <div name="check" className="checkbox-background" id="cb7">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-panda.svg`} alt="panda"/>
                        </div>
                      </label>

                      <input className="checkbox-hidden" onClick={this.update('avatar')} type="checkbox" id="avatar8" value={AVATAR_PREFIX + `frontend/src/avatars/avatar-unicorn.svg`}/>
                      <label className="signup-avatar" htmlFor="avatar8" onClick={() => this.toggleSelected('cb8')}>
                        <div name="check" className="checkbox-background" id="cb8">
                          <img className='avatar-image' src={AVATAR_PREFIX + `frontend/src/avatars/avatar-unicorn.svg`} alt="unicorn" />
                        </div>
                      </label>
                    </div>
                </form>

                
            </div>
        );
    }
}

export default withRouter(SignupForm);