/* eslint-disable */
import React, { Component } from 'react';

function BookEntry(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p><br />
    </div>
  );
}


export default BookEntry;
