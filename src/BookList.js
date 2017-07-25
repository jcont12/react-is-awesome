import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './Book'

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
      method: 'GET',
      url: 'http://localhost:3000/books',
    }).done((response) => {
      this.setState({ bookData: response });
    });
  }

  bookClickHandler() {
    alert('yo it works')
  }

  render() {
    // console.log(this.state.bookData);
    const allTheBooks = this.state.bookData.map(book =>
      <Book title={book.title} genre={book.genre} author={book.author} key={book.id} />,
    );
    return (
      <div>{ allTheBooks }</div>
    )
  }

}

export default BookList;
