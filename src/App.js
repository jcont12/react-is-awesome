import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(input) {
    this.setState({
      query: input,
    });
  }
  render() {

    return (
      <div>
        <h1>BookBook</h1>
        <SearchBar
          onInputChange={this.handleInputChange}
        />
        <BookList query={this.state.query}/>
      </div>
    );
  }
}
export default App;
