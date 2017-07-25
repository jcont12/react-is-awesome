import React, { Component } from 'react';
import Book from './Book.js'

class BookList extends Component {
  render() {
    const BOOKS = this.props.books;
    return (
      <div>
        {BOOKS.map(book => {
          return <Book name={book.title} key={book.id} />})
        }
      </div>
    );
  }
}
export default BookList;
