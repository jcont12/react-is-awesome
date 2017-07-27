import React, { Component } from 'react';
import './App.css';

function SpecificBook() {
  return (
    <div>
      <p>Title: {this.props.title}</p>
      <p>Author: {this.props.author}</p>
      <p>Genre: {this.props.genre}</p>
      <p>Publisher: {this.props.publisher}</p>
    </div>
  );
}

export default SpecificBook;
