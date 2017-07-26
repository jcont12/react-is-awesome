import React, { Component } from 'react';

class LoggedOutNav extends Component {

  render() {
    return (
      <ul className="nav-list">
        <li><button onClick={this.props.homeClickHandler} className="nav-button">Home</button></li>
        <li><button className="nav-button">Login</button></li>
        <li><button className="nav-button">Sign Up</button></li>
      </ul>
    );
  }
}

export default LoggedOutNav;
