import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './book';

function SelectableBookList(props) {
  const selectBook = props.selectBook;
  const bookItems = props.books.length > 0 ?
    props.books.map((book) => {
      const chooseBook = () => { selectBook(book); };
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

SelectableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func.isRequired,
};

SelectableBookList.defaultProps = {
  books: [],
};

export default SelectableBookList;
