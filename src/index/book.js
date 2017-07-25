import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {
  $.ajax({
    method: 'GET',
    url: 'localhost/3000/books',
  }).done((response) => {

  }
});

  render() {
    let title = this.props.book.title;
    let author = this.props.book.author;
    let publisher = this.props.book.publisher;
    let genre = this.props.book.genre;
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{genre}</td>
        <td>{publisher}</td>
      </tr>
    );
  }
}

export default Book;
