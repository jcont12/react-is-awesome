import React, { Component } from 'react';
import './App.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      value: 'value',
    };
  }
  handleChange() {
    console.log('clicked')
  }
  handleSubmit(){
    console.log('submited')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignIn;
