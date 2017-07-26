import React, { Component } from 'react';
import './App.css';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import BookList from './BookList';
import BookShow from './BookShow';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      currentContent: <BookList clickHandler={e => this.clickHandler(e)} />,
    };
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({ currentContent: <BookShow id={e.target.id} /> });
  }

  homeClickHandler() {
    this.setState({ currentContent: <BookList clickHandler={e => this.clickHandler(e)} /> });
  }


  render() {
    let navBar = null;
    if (this.state.isLoggedIn) {
      navBar = <LoggedInNav homeClickHandler={() => this.homeClickHandler()} />;
    } else {
      navBar = <LoggedOutNav homeClickHandler={() => this.homeClickHandler()} />;
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
