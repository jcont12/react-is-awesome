import React, { Component } from 'react';
import './App.css';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import BookList from './BookList';
import BookShow from './BookShow';
import Login from './Login';
import UserShow from './UserShow'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      token: null,
      defaultHome: <BookList clickHandler={e => this.clickHandler(e)} />,
      currentContent: <BookList clickHandler={e => this.clickHandler(e)} />,
    };
  }

  loggerInner(data) {
    if (data.user_id) {
      this.setState({
        user: data.user_id,
        isLoggedIn: true,
        token: data.token,
        currentContent: this.state.defaultHome,
      });
    }
  }

  loggerOuter() {
    this.setState({ user: null, isLoggedIn: false, token: null });
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({ currentContent: <BookShow clickHandler={e => this.userClickHandler(e)} id={e.target.id} userId={this.state.user} /> });
  }

  userClickHandler(id) {
    this.setState({ currentContent: <UserShow userId={this.state.user} clickHandler={e => this.clickHandler(e)} /> })
  }

  navClickHandler(event) {
    const page = event.target.id;
    if (page === 'home') {
      this.setState({ currentContent: this.state.defaultHome });
    } else if (page === 'login') {
      this.setState({ currentContent: <Login formHandler={(id) => this.loggerInner(id)} /> });
    } else if (page === 'sign up') {
      this.setState({ currentContent: '<Sign up to be defined />' });
    } else if (page === 'log out') {
      this.loggerOuter();
      this.setState({ currentContent: this.state.defaultHome });
    } else if (page === 'user-show') {
      this.setState({ currentContent: <UserShow userId={this.state.user} clickHandler={e => this.clickHandler(e)} /> });
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
