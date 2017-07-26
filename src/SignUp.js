import React, { Component } from 'react';
import './App.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      value: 'value',
    };
  }

  handleSubmit() {
    console.log('submited')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.value} />
        </label>
        <input type="submit" value="Sign Up!" />
      </form>
    );
  }
}

export default SignUp;
