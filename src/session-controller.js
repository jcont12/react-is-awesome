import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SessionController extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isLogin) {
      console.log('Login Code Goes Here');
    } else {
      console.log('New User Code Goes Here');
    }
  }

  setLogin(loginState) {
    this.setState({ isLogin: loginState });
    console.log(loginState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Register" onClick={() => this.setLogin(false)} />
        <input type="submit" value="Login" onClick={() => this.setLogin(true)} />
      </form>
    );
  }
}

export default SessionController;
