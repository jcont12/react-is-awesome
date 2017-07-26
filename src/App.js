import React, { Component } from 'react';
import logo from './logo.svg';
import ListBooks from './ListBooks';
import Nav from './Nav';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      currentPage: 'index',
    };
    this.setSignInPage = this.setSignInPage.bind(this);
    this.setSignUpPage = this.setSignUpPage.bind(this);
  }

  setSignInPage() {
    this.setState({ currentPage: 'signInPage' });
  }

  setSignUpPage() {
    this.setState({ currentPage: 'signUpPage' });
  }

  render() {
    let pageContent = <ListBooks />
    if (this.state.currentPage === 'signInPage') {
      pageContent = <SignIn />
    } else if (this.state.currentPage === 'signUpPage') {
      pageContent = <SignUp />
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to KReact</h2>
          {/* callback function */}
          <Nav signInClicked={this.setSignInPage} signUpClicked={this.setSignUpPage} />
        </div>
        <div id="content">
          {pageContent}
        </div>
      </div>
    );
  }
}

export default App;
