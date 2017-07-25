import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBooks</h2>
        </div>
        <Login />
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <p>
        <form id='login-form' method='post' action='http://localhost:3000/sessions'>
          <input type='text' name='user[name]' placeholder='Name' />
          <input type='password' name='user[password]' placeholder='Password' />
          <input type='submit' name='login' value='Log In'
            onClick={props.onClick}/>
        </form>
      </p>
      // {"user_id":431,"token":"eyJ0b2tlbiI6NDMxfQ==\n"}
    );
  }
}

export default App;
