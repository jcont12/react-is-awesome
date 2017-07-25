import React, { Component } from 'react';

class Book extends Component {
  render() {
    return(
      <div>{this.props.name}</div>
    );
  }
}

export default Book;
