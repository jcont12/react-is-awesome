import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './book';

class SelectableBookList extends React.Component {
  renderBook(i) {
    return (<Book
      key={this.props.books[i].id}
      title={this.props.books[i].title}
      author={this.props.books[i].author}
    />);
  }

  render() {
    const bookItems = this.props.books ?
      this.props.books.map(book => <Book
        key={book.id}
        title={book.title}
        author={book.author}
      />) :
      'Loading books....';
    return <div>{bookItems}</div>;
  }
}

SelectableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

SelectableBookList.defaultProps = {
  books: [],
};

export default SelectableBookList;
