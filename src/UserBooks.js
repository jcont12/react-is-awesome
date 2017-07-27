import React, { Component } from 'react';
import $ from 'jquery';
import BookEntry from './BookEntry';

class UserBooks extends Component {
  constructor(props) {
    super();
    this.state = {
      bookData: [],
      userToken: props.userToken,
      userId: props.userId,
    };
  }

  componentDidMount() {
    this.getBookData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.fetch === nextProps.fetch ) {
      return;
    }
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
    console.log(this.state.bookData);
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
