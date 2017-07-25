import React, { Component } from 'react';
import $ from 'jquery';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }


  render() {
    return (
      <form>
        <input type="text" name="query" onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchBar;
