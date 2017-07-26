import React from 'react';
import PropTypes from 'proptypes';

function Book(props) {
  return (
    <ul className="book-list">
      <li><b>
        <a onClick={props.clickHandler} id={props.id} href={'/books/' + props.id}>{props.title}</a>
      </b></li>
      <li>Author: <i>{props.author}</i></li>
      <li>Genre: {props.genre}</li>
    </ul>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
export default Book;
