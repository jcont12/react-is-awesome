import React, { Component } from 'react';
import $ from 'jquery';


class SignInForm extends Component {
  constructor() {
    super();
    this.sendLoginData = this.sendLoginData.bind(this);
    this.handleSignedIn = this.handleSignedIn.bind(this);
  }

  handleSignedIn(token, id) {
    this.props.onSignedIn(token, id);
  }

  sendLoginData(e) {
    e.preventDefault();
    const userData = $('form').serialize();
    $.ajax({
      url: 'http://localhost:3000/sessions',
      method: 'POST',
      data: userData,
    }).done((response) => {
      console.log(response);
      this.handleSignedIn(response.token, response.user_id);
    }).fail(() => { console.log('failed login'); });
  }

  render() {
    return (
      <form onSubmit={this.sendLoginData}>
        <label htmlFor="user[name]">Name:</label>
        <input type="text" name="user[name]" />
        <label htmlFor="user[password]">Password:</label>
        <input type="password" name="user[password]" />
        <input type="submit" value="Login" />
      </form>
    );
  }

}

export default SignInForm;
