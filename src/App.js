import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list';
import SavedReadingLists from './saved-reading-lists';

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
        this.setState({
          readingList: newBookList,
          books: newBooks,
          loadedList: false,
        });
      }
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
      });
    };

    return (
      <div>
        <h1>BOOKZ</h1>
        <div>
          <ReadingList
            books={this.state.readingList}
            saveList={saveList}
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
