import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './book';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list'

class App extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }
  componentDidMount() {
    $.get('http://localhost:3000/books', (data) => {
      this.setState({ books: data });
    });
  }

  render() {
    const bookList = [];

    return (
      <div>
        <h1>BOOKZ</h1>
        <h2>Reading List</h2>
        <div>{this.state.books ? <ReadingList books={bookList} /> : ''}</div>
        <h2>All Books</h2>
        <SelectableBookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
