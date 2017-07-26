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
      current_page: 'signup',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(input) {
    this.setState({
      query: input,
    });
  }
  render() {
    if (this.state.current_page === 'index') {
      return (
        <div>
          <h1>BookBook</h1>
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
          <SignUpForm />
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
