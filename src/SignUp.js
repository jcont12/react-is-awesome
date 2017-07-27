import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = data.serialize();
    $.ajax({
      url: 'http://localhost:3000/sessions',
      method: 'POST',
      crossDomain: true,
      xhrFields: { withCredentials: true },
      data: data,
    }).done((data) => {
      this.setState({ userData: data });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/* add onchange functions that grab data! */}
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
