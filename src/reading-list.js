import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './book';

class ReadingList extends React.Component {
  renderBook(i) {
    return (<Book
      key={this.props.books[i].id}
      title={this.props.books[i].title}
      author={this.props.books[i].author}
    />);
  }

  render() {
    const bookItems = this.props.books.map((book, index) => this.renderBook(index));
    return (<div>{bookItems}</div>);
  }
}

ReadingList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ReadingList;
