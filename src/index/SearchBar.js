import React, { Component } from 'react';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" name="search" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
