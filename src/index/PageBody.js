import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Header from './Header';


// eslint-disable-next-line react/prefer-stateless-function
class PageBody extends Component {
  render() {
    return (
      <div>
        <Header title="GoodReads"/>
        <NavBar />
        <SearchBar />
      </div>
    );
  }
}

export default PageBody;
