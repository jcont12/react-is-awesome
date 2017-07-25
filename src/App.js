import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <h1>BookBook</h1>
        <SearchBar />
        <BookList />
      </div>
    );
  }
}
export default App;
