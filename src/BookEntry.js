/* eslint-disable */
import React, { Component } from 'react';
import $ from 'jquery';

class BookEntry extends Component {
  constructor() {
    super();
    // this.state = {
    //   userId: '193',
    //   userToken: 'eyJ0b2tlbiI6MTkzfQ==\\n'
    // };
    this.sendUserBookData = this.sendUserBookData.bind(this);
  }

  handleAddBook() {
    this.props.onAddBook();
  }

  sendUserBookData(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/users/' + this.props.userId + '/books/' + this.props.id + '?token=' + this.props.userToken,
      method: 'PUT',
    }).done(() => {
      this.handleAddBook();
    })
  }

  render() {
    if (this.props.includeButton === 'true') {
      return (
        <div>
          <p>Title: {this.props.title}</p>
          <p>Author: {this.props.author}</p>
          <p>Genre: {this.props.genre}</p><br />
          <form onSubmit={this.sendUserBookData}>
            <input type='submit' value='Add book' />
          </form>
        </div>
      );
    }
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>Genre: {this.props.genre}</p><br />
      </div>
    )
  }
}


export default BookEntry;
