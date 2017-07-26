import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list';
import SavedReadingLists from './saved-reading-lists';
import SessionController from './session-controller';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      selectedBooks: [],
      readingList: [],
      savedLists: [],
      currentList: 1,
      loadedList: false,
      originalBooks: [],
    };
  }
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    if (this.state.originalBooks.length === 0) {
      $.get('http://localhost:3000/books', (data) => {
        this.setState({
          books: data,
          originalBooks: data,
        });
      });
    } else {
      this.setState({ books: this.state.originalBooks });
    }
  }

  render() {
    const filterBooks = () => {
      const filteredBooks = this.state.books.filter(
        filterBook => !(this.state.readingList.includes(filterBook)),
      );
      this.setState({
        books: filteredBooks,
      });
    };

    const selectBook = (book) => {
      const newBookList = this.state.readingList.slice();
      newBookList.push(book);
      this.setState({
        readingList: newBookList,
        loadedList: false,
      }, filterBooks);
    };

    const saveList = () => {
      this.setState({
        savedLists: this.state.savedLists.concat(
          [{ list: this.state.readingList, id: this.state.currentList }]),
        currentList: this.state.currentList + 1,
        readingList: [],
        loadedList: false,
      });
      this.getAllBooks();
    };

    const loadList = (listIndex) => {
      this.setState({
        readingList: this.state.savedLists[listIndex].list,
        loadedList: true,
      }, filterBooks);
    };

    const newList = () => {
      this.getAllBooks();
      this.setState({
        readingList: [],
        loadedList: false,
      });
    };

    return (
      <div>
        <h1>BOOKZ</h1>
        <SessionController />
        <div>
          <ReadingList
            books={this.state.readingList}
            saveList={saveList}
            newList={newList}
            wasSaved={this.state.loadedList}
          />
        </div>
        <div>
          <SavedReadingLists lists={this.state.savedLists} loadList={loadList} />
        </div>
        <h2>All Books</h2>
        <SelectableBookList books={this.state.books} selectBook={selectBook} />
      </div>
    );
  }
}

export default App;
