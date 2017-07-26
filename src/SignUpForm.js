import React, { Component } from 'react';
import $ from 'jquery';


class SignUpForm extends Component {
  constructor() {
    super();
    this.sendUserData = this.sendUserData.bind(this);
    this.handleRegistered = this.handleRegistered.bind(this);
  }

  handleRegistered() {
    this.props.onRegistered();
  }

  sendUserData(e) {
    e.preventDefault();
    const userData = $('form').serialize();
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: userData,
    }).done(() => {
      this.handleRegistered();
    }).fail(() => { console.log('fail'); });
  }


  render() {
    return (
      <form onSubmit={this.sendUserData}>
        <label htmlFor="user[name]">Name:</label>
        <input type="text" name="user[name]" />
        <label htmlFor="user[password]">Password:</label>
        <input type="password" name="user[password]" />
        <input type="submit" value="Create" />
      </form>
    );
  }
}

export default SignUpForm;
