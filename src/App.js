import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ReadingList from './reading-list';
import SelectableBookList from './selectable-book-list';
import SavedReadingLists from './saved-reading-lists';
import SessionController from './session-controller';
import BookInfo from './book-info';

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
      isLoggedIn: false,
      showingBook: false,
      shownBook: null,
    };

    this.filterBooks = this.filterBooks.bind(this);
    this.selectBook = this.selectBook.bind(this);
    this.showBookInfo = this.showBookInfo.bind(this);
    this.showAllBooks = this.showAllBooks.bind(this);
    this.saveList = this.saveList.bind(this);
    this.loadList = this.loadList.bind(this);
    this.newList = this.newList.bind(this);
    this.updateSession = this.updateSession.bind(this);
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

  filterBooks() {
    const filteredBooks = this.state.books.filter(
      filterBook => !(this.state.readingList.includes(filterBook)),
    );
    this.setState({
      books: filteredBooks,
    });
  }

  selectBook(book) {
    const newBookList = this.state.readingList.slice();
    newBookList.push(book);
    this.setState({
      readingList: newBookList,
      loadedList: false,
    }, this.filterBooks);
  }

  showBookInfo(book) {
    this.setState({
      showingBook: true,
      shownBook: book,
    });
  }

  showAllBooks() {
    this.setState({
      showingBook: false,
      shownBook: null,
    });
  }

  saveList() {
    /*
    For each book in readingList-
      Make ajax call to PUT /users/:user_id/books/:id
    */
    this.setState({
      savedLists: this.state.savedLists.concat(
        [{ list: this.state.readingList, id: this.state.currentList }]),
      currentList: this.state.currentList + 1,
      readingList: [],
      loadedList: false,
    });
    this.getAllBooks();
  }

  loadList(listIndex) {
    /*
    Make ajax call to users/:id/books
    Populate readingList with those books
    */
    this.setState({
      readingList: this.state.savedLists[listIndex].list,
      loadedList: true,
    }, this.filterBooks);
  }

  newList() {
    this.getAllBooks();
    this.setState({
      readingList: [],
      loadedList: false,
    });
  }

  updateSession(loggedIn) {
    this.setState({
      isLoggedIn: loggedIn,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>BOOKZ</h1>
        <SessionController updateSession={this.updateSession} loggedIn={this.state.isLoggedIn} />
        <div>
          <ReadingList
            books={this.state.readingList}
            saveList={this.saveList}
            newList={this.newList}
            wasSaved={this.state.loadedList}
            loggedIn={this.state.isLoggedIn}
            showBook={this.showBookInfo}
          />
        </div>
        <div className="saved-lists">
          <h2>All Lists</h2>
          <SavedReadingLists
            lists={this.state.savedLists}
            loadList={this.loadList}
          />
        </div>
        {
          (this.state.showingBook) ?
            <BookInfo
              book={this.state.shownBook}
              showAllBooks={this.showAllBooks}
            /> :
            <SelectableBookList
              books={this.state.books}
              selectBook={this.selectBook}
              showBookInfo={this.showBookInfo}
              loggedIn={this.state.isLoggedIn}
            />
        }
      </div>
    );
  }
}

export default App;
