import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/sessions',
      data: $(e.target).serialize()
    }).done((data) => {
      this.props.formHandler(data);
    });
  }

  render() {
    return (
      <div className='login-container'>
        <form
          id='login-form'
          method='post'
          action='http://localhost:3000/sessions'
          onSubmit={e => this.handleSubmit(e)} >
          <input type='text' name='user[name]' placeholder='Name' />
          <input type='password' name='user[password]' placeholder='Password' />
          <input type='submit' name='login' value='Log In'/>
         </form>
      </div>
    );
  }
}

export default Login;
