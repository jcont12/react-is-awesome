import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './Book'

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
      bookDetails: null,
    };
  }

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/books/6',
    }).done((response) => {
      this.setState({ bookDetails: response });
    });
  }
  render() {
    if (this.state.bookDetails) {
      return (
        <Book
          title={this.state.bookDetails.title}
          genre={this.state.bookDetails.genre}
          author={this.state.bookDetails.author}
          key={this.state.bookDetails.id}
        />
      );
    } else {
      return (
        <div>Loading book details...</div>
      )
    }

  }
}

export default BookShow;
