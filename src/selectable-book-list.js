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
    const bookItems = this.props.books.length > 0 ?
      this.props.books.map((book) => {
        const chooseBook = () => { this.props.selectBook(book); };
        return (
          <div key={book.id}>
            <button onClick={chooseBook}>Add to List</button>
            <Book
              title={book.title}
              author={book.author}
            />
          </div>
        );
      }) :
      'Loading books....';
    return <div>{bookItems}</div>;
  }
}

SelectableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func.isRequired,
};

SelectableBookList.defaultProps = {
  books: [],
};

export default SelectableBookList;
