import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Book(props) {
  return (
    <div>Title: {props.title} - By {props.author}</div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
