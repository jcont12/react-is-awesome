import React, { Component } from 'react';
import Book from './Book.js'

class BookList extends Component {
  render() {
    const BOOKS = ['Gone With the Wind','Jae Is Feeling Better','Sparky is Starting to Understand']
    return (
      <div>
        {BOOKS.map(name => {
          return <Book name={name}/>})
        }
      </div>
    );
  }
}
export default BookList;
