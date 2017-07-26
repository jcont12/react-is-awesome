import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn'
import './App.css';

class Nav extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }
  handleClick() {
    this.props.signInClicked();
  }
  handleSignUpClick() {
    this.props.signUpClicked();
  }
  render() {
    const signInText = this.props.signedIn ? 'Sign Out' : 'Sign In';
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>
            {signInText}
          </button>
        </div>
        <div>
          <button onClick={this.handleSignUpClick}>
            SignUp
          </button>
        </div>
      </div>
    );
  }
}
Nav.propTypes = {
  signedIn: PropTypes.bool,
};

export default Nav;
