import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

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

  setLogin(loginState) {
    this.setState({ isLogin: loginState });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isLogin) {
      console.log('Login Code Goes Here');
    } else {
      $.post(
        'http://localhost:3000/users',
        {
          user: {
            name: this.state.username,
            password: this.state.password,
          },
        },
        () => { console.log('user created successfully'); },
      ).fail((response) => { console.log(response); });
    }
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
