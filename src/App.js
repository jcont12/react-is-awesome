import React, { Component } from 'react';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import Nav from './Nav';
import SignIn from './SignIn'
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
    };
  }
  handleClick() {
    // WORK ON THIS
    <SignIn />;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to KReact</h2>
          <Nav  handleClick={this.handleClick} />
        </div>
        {/* <ListBooks /> */}
      </div>
    );
  }
}

export default App;
