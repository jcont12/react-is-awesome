import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     username: '',
  //     password: '',
  //   };
  // }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/sessions',
      data: {
        user: {
          name: 'dbc',
          password: 'pw',
        },
      },
    }).done((data) => {
      console.log(data);
      console.log(this.props)
      this.props.formHandler(data.user_id);
    });
  }
  //
  // handleUsernameChange() {
  //   this.setState({ username: e.target.value});
  // }
  //
  // handlePasswordChange() {
  //   this.setState({ password: e.target.value});
  // }

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
