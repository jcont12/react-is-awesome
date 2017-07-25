import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      selectedBooks: [],
      readingList: [],
      savedLists: [],
    };
  }
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    $.get('http://localhost:3000/books', (data) => {
      this.setState({ books: data });
    });
  }

  render() {
    const selectBook = (book) => {
      const newBookList = this.state.readingList.slice();
      if (!newBookList.includes(book)) {
        newBookList.push(book);
        const newBooks = this.state.books.filter(filterBook =>
          filterBook !== book,
        );
        this.setState({ readingList: newBookList, books: newBooks });
      }
    };

    const saveList = () => {
      console.log('We should save the current list');
    };

    return (
      <div>
        <h1>BOOKZ</h1>
        <div>
          <ReadingList books={this.state.readingList} saveList={saveList} />
        </div>
        <h2>All Books</h2>
        <SelectableBookList books={this.state.books} selectBook={selectBook} />
      </div>
    );
  }
}

export default App;
