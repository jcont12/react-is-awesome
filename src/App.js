import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import SignUpForm from './SignUpForm';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      current_page: 'index',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegisteredChange = this.handleRegisteredChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

  render() {
    if (this.state.current_page === 'index') {
      return (
        <div>
          <h1>BookBook</h1>
          <button onClick={this.handleSignUp}> Sign up! </button><br /><br />
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
        <p>Signed out!</p>
      </div>
    );
  }
}
export default App;
