import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Nav extends Component {
  render() {
    const signInText = this.props.signedIn ? 'Sign Out' : 'Sign In';
    return (
      <div>
        <button>{signInText}</button>
      </div>
    );
    Nav.propTypes = {
      signedIn: ProtoTypes.bool,
    };
  }
}
