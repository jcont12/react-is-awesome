import React from 'react';
import PropTypes from 'prop-types';

function BookInfo(props) {
  return (
    <div>
      <h3>{props.book.title}</h3>
      <div>
        Author: {props.book.author}<br />
        Publisher: {props.book.publisher}<br />
        Genre: {props.book.genre}
      </div>
      <button onClick={props.showAllBooks}>Back</button>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  showAllBooks: PropTypes.func.isRequired,
};

export default BookInfo;
