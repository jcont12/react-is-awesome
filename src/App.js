import React, { Component } from 'react';
import './App.css';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import BookList from './BookList';
import BookShow from './BookShow';
import Login from './Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      defaultHome: <BookList clickHandler={e => this.clickHandler(e)} />,
      currentContent: <BookList clickHandler={e => this.clickHandler(e)} />,
    };
  }

  loggerInner(id) {
    console.log(id)
    if (id) {
      this.setState({ user: id, isLoggedIn: true, currentContent: this.state.defaultHome})
    }
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({ currentContent: <BookShow id={e.target.id} /> });
  }

  navClickHandler(event) {
    const page = event.target.id
    if (page === 'home') {
      this.setState({ currentContent: this.state.defaultHome });
    } else if (page === 'login') {
      this.setState({ currentContent: <Login formHandler={(id) => this.loggerInner(id)} /> });
    } else if (page === 'sign up') {
      this.setState({ currentContent: '<Sign up to be defined />' });
    } else if (page === 'log out') {
      this.setState({ currentContent: '<logout to be defined />' });
    }
  }


  render() {
    let navBar = null;
    if (this.state.isLoggedIn) {
      navBar = <LoggedInNav navClickHandler={(e) => this.navClickHandler(e)} />;
    } else {
      navBar = <LoggedOutNav navClickHandler={(e) => this.navClickHandler(e)} />;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://thumb7.shutterstock.com/display_pic_with_logo/636115/279332939/stock-photo-book-stack-of-books-covers-blank-colorful-textbooks-bookmark-school-studying-information-content-279332939.jpg" className="App-logo" alt="logo" />
          <h2>Welcome to Book Fools</h2>
        </div>

        <div className="nav">
          {navBar}
        </div>
        {this.state.currentContent}
      </div>
    );
  }
}

export default App;
