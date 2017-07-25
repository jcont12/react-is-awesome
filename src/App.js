import React, { Component } from 'react';
import './App.css';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let navBar = null;
    if (this.state.isLoggedIn) {
      navBar = <LoggedInNav />
    } else {
      navBar = <LoggedOutNav />
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png" className="App-logo" alt="logo" />
          <h2>Welcome to Book Fools</h2>
        </div>

        <div className="nav">
          {navBar}
        </div>
      </div>
    );
  }
}

export default App;
