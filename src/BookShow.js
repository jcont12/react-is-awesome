import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './Book';
import User from './User';

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
      bookDetails: null,
    };
  }

  componentDidMount() {
    this.getBookDetails(this.props.id);
  }

  getBookDetails(id) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/books/${id}`,
    }).done((response) => {
      this.setState({ bookDetails: response });
    });
  }

  render() {
    if (this.state.bookDetails) {
      const allTheUsers = this.state.bookDetails.users.map(user =>
        <User clickHandler={this.props.clickHandler} key={user.id} name={user.name} userId={user.id} id={user.id} />
      )
      return (
        <div>
          <Book
            title={this.state.bookDetails.book.title}
            genre={this.state.bookDetails.book.genre}
            author={this.state.bookDetails.book.author}
            key={this.state.bookDetails.book.id}
          />
        <aside>
          <h3>Other users who faved this book</h3>
          <div>
            {allTheUsers}
          </div>
        </aside>
        </div>
      );
    } else {
      return (
        <div>Loading book details...</div>
      )
    }

  }
}

export default BookShow;
