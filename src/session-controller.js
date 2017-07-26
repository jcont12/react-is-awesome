import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class SessionController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      actionIsLogin: false,
      errors: '',
      token: '',
    };

    this.updateSession = props.updateSession;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  setLogin(loginState) {
    this.setState({ actionIsLogin: loginState });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.actionIsLogin) {
      $.post(
        'http://localhost:3000/sessions',
        {
          user: {
            name: this.state.username,
            password: this.state.password,
          },
        },
        (response) => {
          this.updateSession(true);
          this.setState({
            errors: '',
            token: response.token,
          });
        },
      ).fail((response) => {
        const responseText = JSON.parse(response.responseText);
        this.setState({ errors: responseText.message });
      });
    } else {
      $.post(
        'http://localhost:3000/users',
        {
          user: {
            name: this.state.username,
            password: this.state.password,
          },
        },
        () => {
          this.setState({
            errors: 'User created successfully',
          });
        },
      ).fail((response) => {
        const responseText = JSON.parse(response.responseText);
        this.setState({ errors: responseText.message });
      });
    }
  }

  logout() {
    this.updateSession(false);
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <div>
        <div>{this.state.errors}</div>
        { this.props.loggedIn ? (
          <input type="submit" value="Logout" onClick={this.logout} />
          ) : (
            <form onSubmit={this.handleSubmit} >
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <input type="submit" value="Register" onClick={() => this.setLogin(false)} />
              <input type="submit" value="Login" onClick={() => this.setLogin(true)} />
            </form>
          )
        }
      </div>
    );
  }
}

SessionController.propTypes = {
  updateSession: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default SessionController;
