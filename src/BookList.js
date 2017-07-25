import React, { Component } from 'react';
import $ from 'jquery';
import BookEntry from './BookEntry';
import './App.css';


class BookList extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
    };
  }

  componentDidMount() {
    this.getBookData();
  }

  getBookData() {
    $.ajax({
      url: 'http://localhost:3000/books/',
      method: 'GET',
    }).done((data) => {
      this.setState({ bookData: data });
    });
  }

  render() {
    const books = this.state.bookData.map(book =>
      <BookEntry
        title={book.title}
        author={book.author}
        genre={book.genre}
        id={book.id}
      />,
    );
    return (
      <ul>{books}</ul>
    );
  }
}

export default BookList;
