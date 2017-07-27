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
    this.handleAddedBook = this.handleAddedBook.bind(this);
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

  handleAddedBook() {
    this.props.onSuperHandleAddedBook();
  }

  render() {
    const books = [];
    this.state.bookData.forEach((book) => {
      const noMatchTitle = book.title.toLowerCase().indexOf(this.props.query) === -1
      const noMatchAuthor = book.author.toLowerCase().indexOf(this.props.query) === -1
      const noMatchGenre = book.genre.toLowerCase().indexOf(this.props.query) === -1
      if (noMatchTitle && noMatchAuthor && noMatchGenre) {
        return;
      }
      books.push(
        <BookEntry
          title={book.title}
          author={book.author}
          genre={book.genre}
          key={book.id}
          id={book.id}
          userId={this.props.userId}
          userToken={this.props.userToken}
          includeButton={this.props.includeButton}
          onAddBook={this.handleAddedBook}
        />,
      );
    });
    //
    // this.state.bookData.map(book =>
    //   <BookEntry title={book.title} author={book.author} genre={book.genre} key={book.id} />,
    // );
    return (
      <div>{books}</div>
    );
  }
}

export default BookList;
