import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn'
import './App.css';

class Nav extends Component {
  render() {
    const signInText = this.props.signedIn ? 'Sign Out' : 'Sign In';
    return (
      <div>
        <button onClick={this.props.handleClick}>
          {signInText}
        </button>
      </div>
    );
    Nav.propTypes = {
      signedIn: PropTypes.bool,
    };
  }
}

export default Nav;
