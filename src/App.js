import React, { Component } from 'react';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import Nav from './Nav';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to KReact</h2>
        </div>
        <p className="App-intro">
          <ListBooks />
        </p>
      </div>
    );
  }
}

export default App;
