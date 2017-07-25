import React, { Component } from 'react';
import Book from './Book';
import $ from 'jquery';
import './App.css';

class ListBooks extends Component {
  constructor() {
    super();
    this.state = {
      bookState: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    $.ajax({
      url: 'http://localhost:3000/books/',
      method: 'GET'
    }).done((data) => {
      this.setState({ bookState: data });
    });
  }

  render() {
    const books = this.state.bookState.map(book =>
      <Book title={book.title} author={book.author} genre={book.genre} key={book.id} />,
    );
    return (
      <div>{books}</div>
    );
  }
}

export default ListBooks;
