import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './book';

function SelectableBookList(props) {
  const inlineStyle = {
    display: 'inline-block',
  };
  const selectBook = props.selectBook;
  const bookItems = props.books.length > 0 ?
    props.books.map((book) => {
      const chooseBook = () => { selectBook(book); };
      return (
        <div key={book.id}>
          { props.loggedIn ?
            <button onClick={chooseBook}>Add to List</button> :
            <span />
          }
          <div style={inlineStyle}>
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              showBook={() => props.showBookInfo(book)}
            />
          </div>
        </div>
      );
    }) :
    'Loading books....';
  return (
    <div>
      <h2>All Books</h2>
      <div>{bookItems}</div>
    </div>
  );
}

SelectableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  showBookInfo: PropTypes.func.isRequired,
};

SelectableBookList.defaultProps = {
  books: [],
};

export default SelectableBookList;
