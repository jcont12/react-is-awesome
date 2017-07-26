import React, { Component } from 'react';
import $ from 'jquery';


class SignUpForm extends Component {
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

  sendUserData(e) {
    e.preventDefault();
    // const nameData = $('form').closest('#name').val();
    // const passwordData = $('form').closest('#password').val();
    const userData = $('form').serialize();
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: userData,
    }).done(function() {console.log('success')})
    .fail(function() {console.log('fail')});
  }
}

export default SignUpForm;
