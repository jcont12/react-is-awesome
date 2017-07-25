import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      selectedBooks: [],
    };
  }
  componentDidMount() {
    $.get('http://localhost:3000/books', (data) => {
      this.setState({ books: data });
    });
  }

  render() {
    const bookList = [];

    const selectBook = (book) => {
      console.log(book);
    };
    return (
      <div>
        <h1>BOOKZ</h1>
        <h2>Reading List</h2>
        <div>{this.state.books ? <ReadingList books={bookList} /> : ''}</div>
        <h2>All Books</h2>
        <SelectableBookList books={this.state.books} selectBook={selectBook} />
      </div>
    );
  }
}

export default App;
