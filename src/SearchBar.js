import React, { Component } from 'react';
import $ from 'jquery';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" name="query" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
