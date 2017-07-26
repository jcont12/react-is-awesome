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
            />
          </div>
        </div>
      );
    }) :
    'Loading books....';
  return <div>{bookItems}</div>;
}

SelectableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

SelectableBookList.defaultProps = {
  books: [],
};

export default SelectableBookList;
