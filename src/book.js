import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Book(props) {
  return (
    <a href="#" onClick={() => props.showBook(props.id)}>
      <div>Title: {props.title} - By {props.author}</div>
    </a>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showBook: PropTypes.func.isRequired,
};

export default Book;
