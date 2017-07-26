import React, { Component } from 'react';
import $ from 'jquery';
import BookEntry from './BookEntry';

class UserBooks extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
      userToken: 'eyJ0b2tlbiI6MTkzfQ==\\n',
      userId: '193',
    };
  }

  componentDidMount() {
    this.getBookData();
  }

  getBookData() {
    $.ajax({
      url: 'http://localhost:3000/users/' + this.state.userId + '/books/?token=' + this.state.userToken,
      method: 'GET',
    }).done((data) => {
      this.setState({
        bookData: data,
      });
    });
  }

  render() {
    const books = this.state.bookData.map(book =>
      <BookEntry
        title={book.title}
        author={book.author}
        genre={book.genre}
        key={book.id}
      />,
    );
    return (
      <div>
        <h2> My Books: </h2>
        <div>{books}</div>
      </div>

    );
  }
}

export default UserBooks;
