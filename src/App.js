import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Book from './book';

class App extends Component {
  constructor() {
    super();
    this.state = { books: null };
  }
  componentDidMount() {
    $.get('http://localhost:3000/books', (data) => {
      this.setState({ books: data });
    });
  }

  addFood() {
    $.post('http://localhost:3000/books', {
      name: 'Peanut Butter',
      unit: '24 Gallons',
    });
    return this;
  }

  render() {
    const bookItems = this.state.books ?
        this.state.books.map(book => <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />) :
        'Loading books....';

    return (
      <div>
        <h1>BOOKZ</h1>
        <div>{bookItems}</div>
      </div>
    );
  }
}

export default App;
