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
    let saveButton;
    if (bookItems.length > 0 && !this.props.wasSaved) {
      saveButton = <button onClick={this.props.saveList}>Save List</button>;
    } else if (this.props.wasSaved) {
      saveButton = <button onClick={this.props.newList}>New List</button>;
    } else {
      saveButton = <div />;
    }
    return (
      <div>
        <h2>Reading List</h2>
        <div>{bookItems}</div>
        {saveButton}
      </div>
    );
  }
}

ReadingList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveList: PropTypes.func.isRequired,
  newList: PropTypes.func.isRequired,
  wasSaved: PropTypes.bool,
};

ReadingList.defaultProps = {
  wasSaved: false,
};

export default ReadingList;
