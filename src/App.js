import React, { Component } from 'react';
import BookEntry from './BookEntry';
import BookList from './BookList';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <h1>BookBook</h1>
        <BookList />
      </div>
    );
  }
}
export default App;
