import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
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
    return <p>Login here</p>
  }
}

export default App;
