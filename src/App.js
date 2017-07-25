import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './book';
import ReadingList from './reading-list';

class App extends Component {
  constructor() {
    super();
    this.state = { books: null };
  }
  componentDidMount() {
    $.get('http://localhost:3000/books', (data) => {
      this.setState({ books: data });
    });
  }

  render() {
    const bookItems = this.state.books ?
        this.state.books.map(book => <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />) :
        'Loading books....';
    const bookList = this.state.books ?
      [this.state.books[0], this.state.books[3], this.state.books[7], this.state.books[9]] : null;

    return (
      <div>
        <h1>BOOKZ</h1>
        <h2>Reading List</h2>
        <div>{this.state.books ? <ReadingList books={bookList} /> : ''}</div>
        <h2>All Books</h2>
        <div>{bookItems}</div>
      </div>
    );
  }
}

export default App;
