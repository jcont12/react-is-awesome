import React, { Component } from 'react';
import './App.css';

function Book(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </div>
  );
}

export default Book;
