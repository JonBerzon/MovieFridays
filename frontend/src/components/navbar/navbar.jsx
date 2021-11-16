import React from "react";
import catSRC from "../../avatars/avatar-cat.svg";
import dogSRC from "../../avatars/avatar-dog.svg";

class Navbar extends React.Component {
  render() {
    debugger
    return (
      <div className="navbar-flex-container">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <h3 className="navbar-logo">MOVIE FRIDAYS</h3>
          </div>

          <div className="navbar-dropdown-button">
            <div className="navbar-dropdown-img-container">
              <img className="navbar-user-avatar" src={dogSRC} />
            </div>
            <div className="navbar-dropdown-menu">
              <li className='navbar-logout' onClick={this.props.logout}>Logout</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
