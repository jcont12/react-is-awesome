import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import UserBooks from './UserBooks';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      current_page: 'index',
      userToken: 'eyJ0b2tlbiI6MTkzfQ==\\n',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegisteredChange = this.handleRegisteredChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignedInChange = this.handleSignedInChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleInputChange(input) {
    this.setState({
      query: input,
    });
  }

  handleRegisteredChange() {
    this.setState({
      current_page: 'index',
    });
  }

  handleSignUp() {
    this.setState({
      current_page: 'signup',
    });
  }

  handleSignedInChange(token) {
    this.setState({
      current_page: 'index',
      userToken: token,
    });
  }

  handleLogOut() {
    this.setState({
      userToken: '',
    });
  }

  handleSignIn() {
    this.setState({
      current_page: 'signin',
    });
  }

  render() {
    if (this.state.current_page === 'index') {
      if (this.state.userToken !== '') {
        return (
          <div>
            <h1>BookBook</h1>
            <button onClick={this.handleLogOut}> Log out </button><br /><br />
            <UserBooks />
            <h2>All books: </h2>
            <SearchBar
              onInputChange={this.handleInputChange}
            />
            <BookList query={this.state.query} />
          </div>
        );
      }
      return (
        <div>
          <h1>BookBook</h1>
          <button onClick={this.handleSignUp}> Sign up! </button><br /><br />
          <button onClick={this.handleSignIn}> Sign in! </button><br /><br />
          <h2>All books: </h2>
          <SearchBar
            onInputChange={this.handleInputChange}
          />
          <BookList query={this.state.query} />
        </div>
      );
    } else if (this.state.current_page === 'signup') {
      return (
        <div>
          <h1>BookBook</h1>
          <p>Sign up!</p>
          <SignUpForm onRegistered={this.handleRegisteredChange} />
        </div>
      );
    }
    return (
      <div>
        <h1>BookBook</h1>
        <p>Sign in!</p>
        <SignInForm onSignedIn={this.handleSignedInChange} />
      </div>
    );
  }
}

export default App;
