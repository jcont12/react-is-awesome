import React, { Component } from 'react';

class LoggedInNav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li><button className="nav-button">Home</button></li>
        <li><button className="nav-button">Logout</button></li>
        <li><button className="nav-button">My Profile</button></li>
      </ul>
    );
  }
}

export default LoggedInNav;
