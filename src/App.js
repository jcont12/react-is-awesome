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
      currentPage: 'index',
      userToken: '',
      userId: '',
      fetch: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegisteredChange = this.handleRegisteredChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignedInChange = this.handleSignedInChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.inceptionAddedBook = this.inceptionAddedBook.bind(this);
  }

  handleInputChange(input) {
    this.setState({
      query: input,
    });
  }

  handleRegisteredChange() {
    this.setState({
      currentPage: 'index',
    });
  }

  handleSignUp() {
    this.setState({
      currentPage: 'signup',
    });
  }

  handleSignedInChange(token, id) {
    this.setState({
      currentPage: 'index',
      userToken: token,
      userId: id,
    });
  }

  handleLogOut() {
    this.setState({
      userToken: '',
    });
  }

  handleSignIn() {
    this.setState({
      currentPage: 'signin',
    });
  }

  handleHome() {
    this.setState({
      currentPage: 'index',
    });
  }

  inceptionAddedBook() {
    this.setState ({
      fetch: (this.state.fetch) + 1,
    });
  }

  render() {
    if (this.state.currentPage === 'index') {
      if (this.state.userToken !== '') {
        return (
          <div>
            <h1>BookBook</h1>
            <button onClick={this.handleHome}>Home</button>
            <button onClick={this.handleLogOut}> Log out </button><br /><br />
            <UserBooks fetch={this.state.fetch} userToken={this.state.userToken} userId={this.state.userId} />
            <h2>All books: </h2>
            <SearchBar
              onInputChange={this.handleInputChange}
            />
            <BookList includeButton={'true'} query={this.state.query} userId={this.state.userId} userToken={this.state.userToken}
            onSuperHandleAddedBook={this.inceptionAddedBook} />
          </div>
        );
      }
      return (
        <div>
          <h1>BookBook</h1>
          <button onClick={this.handleHome}>Home</button>
          <button onClick={this.handleSignUp}> Sign up! </button><br /><br />
          <button onClick={this.handleSignIn}> Sign in! </button><br /><br />
          <h2>All books: </h2>
          <SearchBar
            onInputChange={this.handleInputChange}
          />
          <BookList query={this.state.query} />
        </div>
      );
    } else if (this.state.currentPage === 'signup') {
      return (
        <div>
          <h1>BookBook</h1>
          <button onClick={this.handleHome}>Home</button>
          <p>Sign up!</p>
          <SignUpForm onRegistered={this.handleRegisteredChange} />
        </div>
      );
    }
    return (
      <div>
        <h1>BookBook</h1>
        <button onClick={this.handleHome}>Home</button>
        <p>Sign in!</p>
        <SignInForm onSignedIn={this.handleSignedInChange} />
      </div>
    );
  }
}

export default App;
