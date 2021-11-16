import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div>
    <div className="navbar-flex-container">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/groups">
            <h3 className="navbar-logo">MOVIE FRIDAYS</h3>
          </Link>
        </div>

        <div className="navbar-dropdown-button">
          <div className="navbar-dropdown-img-container">
            <img className="navbar-user-avatar" src={props.user.avatar} />
          </div>
          <div className="navbar-dropdown-menu">
            <li className="navbar-logout" onClick={props.logout}>
              Logout
            </li>
          </div>
        </div>
      </div>
    </div>
    <div className='navbar-cushion'></div>
  </div>
);

export default Navbar;
