import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.logInFunc}>Login</button>
        <button>Register</button>
        <button>Log Out</button>
        <button>Home</button>
      </div>
    );
  }
}

export default Nav;
