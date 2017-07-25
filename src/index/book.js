import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
function Book(props) {
  return (
    <div className="book-info">
      <ul>
        <p>{props.title}</p>
        {props.author} / {props.genre}
      </ul>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Book;
