import React, { Component } from 'react';
import $ from 'jquery'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('in handleSubmit, this.state to follow');
    console.log(this.state);
    $.ajax( {
      method: 'POST',
      url: 'http://localhost:3000/sessions',
      data: $(this).serialize(),
    }).done( data => {
      console.log('we have returned from ajax call, data to follow');
      console.log(data);
      }
    );
  }

  handleUsernameChange() {
    this.setState({username: e.target.value})
  }

  handlePasswordChange() {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>
        <form
           id='login-form'
           method='post'
           action='http://localhost:3000/sessions'
           onSubmit={this.handleSubmit} >
           <input type='text' name='user[name]' placeholder='Name' value={this.state.username} onChange={this.handleUsernameChange} />
           <input type='password' name='user[password]' placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange}/>
           <input type='submit' name='login' value='Log In'/>
         </form>
       {/* {"user_id":431,"token":"eyJ0b2tlbiI6NDMxfQ==\n"} */}
      </div>
    );
  }
}

export default Login;
