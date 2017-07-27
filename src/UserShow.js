import React, { Component } from 'react';
import $ from 'jquery';
import Book from './Book'

class UserShow extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      name: null,
      books: [],
    };
  }

  getUserDetails(id) {
    $.ajax({
      method: 'get',
      url: `http://localhost:3000/users/${id}`,
    }).done((data) => {
      this.setState({
        name: data.name,
        books: data.books,
        userId: data.id,
      });
    });
  }

  componentDidMount() {
    this.getUserDetails(this.props.userId);
  }

  render() {
    const allTheBooks = this.state.books.map(book =>
      <Book
        title={book.title}
        genre={book.genre}
        author={book.author}
        key={book.id}
        id={book.id}
        clickHandler={e => this.props.clickHandler(e)}
      />,
    );

    return (
      <div className='login-container'>
        <h1>{this.state.name}'s Favorite Books</h1>
        <div>
          {allTheBooks}
        </div>
      </div>
    );
  }
}

export default UserShow;
