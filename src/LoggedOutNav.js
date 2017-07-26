import React, { Component } from 'react';

class LoggedOutNav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li><button id='home' onClick={e => this.props.navClickHandler(e)} className="nav-button">Home</button></li>
        <li><button id='login' onClick={e => this.props.navClickHandler(e)} className="nav-button">Login</button></li>
        <li><button className="nav-button">Sign Up</button></li>
      </ul>
    );
  }
}

export default LoggedOutNav;
