import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class Row extends Component {
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
      method: 'GET',
      url: 'http://localhost:3000/books',
    }).done((response) => {
      this.setState({ bookData: response });
    });
  }

  render() {
    const books = this.state.bookData.map(book =>
      <Book title={book.title} author={book.author} genre={book.genre} key={book.id} />,
    );
    return (
      <ul>{books}</ul>
    );
  }
}

export default Row;
