import React, { Component } from 'react';

class LoggedInNav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li><button id='home' onClick={e => this.props.navClickHandler(e)} className="nav-button">Home</button></li>
        <li><button className="nav-button">Logout</button></li>
        <li><button className="nav-button">My Profile</button></li>
      </ul>
    );
  }
}

export default LoggedInNav;
